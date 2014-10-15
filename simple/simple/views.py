#!/usr/bin/python -t
# coding: utf8

from pyramid.view import view_config
from pyramid.renderers import render_to_response
from pyramid.response import Response
from pyramid.httpexceptions import HTTPFound
import uuid
import mysql.connector
import datetime
import sys
reload(sys)
sys.setdefaultencoding("utf-8")


users = {u'admin':u'Qazcde123',u'nemirova':u'FyfkbP123'}
model = {}

@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project': 'simple'}
    

@view_config(route_name="index_route")
def index(request):
    print 'Index function'
    print request.method
    print request.params
    
    if request.method == "POST" and 'username' in request.cookies:
        #пользователь авторизован и запрос передается в обработку
        username = request.cookies['username']
        text = u'Пользователь: авторизован.   Выполняем запрос.'
        print request.method
        print text, username
        return render_to_response('templates/check.pt', {'text':text}, request)

    else:
        #Или пользователь неавторизован.
        if 'username' in request.cookies:
            #Пользователь авторизован, но это не запрос. 
            #Необходимо вывести форму для создания запроса.
            username = request.cookies['username']
            text = u'Пользователь авторизован, но это не запрос. Выводим форму.'
            model = get_model_data('crm')
            print text, username, model['category']
            return render_to_response('templates/request.pt', {'category':model['category']}, request)
        else:
            text = u'Пользователь НЕавторизован.'
            print text
            return render_to_response('templates/login.pt', {}, request)


@view_config(route_name="login_route")
def login(request):
    print 'Login function'
    print request.params
    
    response = Response()
    username = request.params['username']
    password = request.params['password']
    if username in users.keys() and users[username] == password: 
        response.set_cookie('username', value=username, max_age=86400)

    return HTTPFound(location = "/", headers=response.headers)        

@view_config(route_name="logout_route")
def logout(request):
    response = Response()
    response.set_cookie('username', value=None)
    return HTTPFound(location = "/", headers=response.headers)

@view_config(route_name="request_route")
def request(request):
    print 'Request function'
    params = {}
    
    if request.method == "POST" and 'username' in request.cookies:
        #пользователь авторизован и запрос передается в обработку
        print request.params
        
        #проверяем параметры
        if request.params['datefrom'] == '':
            params['datefrom'] = '2014-01-01 00:00:00.000000'
        else:
            params['datefrom'] = datetime.datetime.strptime(request.params['datefrom'], "%Y-%m-%d")
            print datetime.datetime.strptime(request.params['datefrom'], "%Y-%m-%d")

        if request.params['dateto'] == '':
            params['dateto'] = datetime.datetime.now()
        else:
            params['dateto'] = datetime.datetime.strptime(request.params['dateto'], "%Y-%m-%d")
            print datetime.datetime.strptime(request.params['dateto'], "%Y-%m-%d")
            
        if request.params['sender'] == '':
            params['sender'] = '%@%'
        else:
            params['sender'] = request.params['sender']

        if request.params['recipient'] == '':
            params['recipient'] = '%@%'
        else:
            params['recipient'] = request.params['recipient']

        #if request.params['category'] == '':
        #    params['category'] = ('all')
        #else:
        params['category'] = request.params.getall('category')
        
        params['limit'] = 10000
        print params
        
        #Вызов процедуры запроса к базе. Ответ из строк
        data = get_data(params)
        
        text = u'Пользователь: авторизован. Выполняем запрос.'
        return render_to_response('templates/showrequest.pt', {'data':data[0],'params':params, 'count':data[1]}, request)

def get_data(req_data):
    print req_data

    #Открываем базу с реальными данными
    real_db = mysql.connector.connect(host="192.168.77.15",
                                      user="extractor",
                                      password="Qazcde123",
                                      database="clear_data")
    con = real_db.cursor(buffered=True)

    #Формируем запрос
    str_lim = ' and isclassified ORDER BY create_date LIMIT %s;'
    str_datefrom = ' WHERE create_date >= %s'
    str_dateto = ' and create_date <= %s'
    str_sender = ' and sender like %s'
    str_recipients = ' and recipients like %s'

    if 'all' in req_data['category']:
        str_cat = ''
        req_param = (req_data['datefrom'],req_data['dateto'],req_data['sender'],req_data['recipient'],\
                    req_data['limit'])
    else:
        str_cat = ' and ( category like %s'
        l = len(req_data['category'])
        if l>1:
            for i in range(1,l):
                str = ' or category like %s ' 
                str_cat = str_cat + str
        str_cat = str_cat + ')'
        
        req_param = (req_data['datefrom'],req_data['dateto'],req_data['sender'],req_data['recipient'])+\
                    tuple(req_data['category']) + (req_data['limit'],)
        print type(req_param)
        
    str_notcat = ' and category <> %s'
    str = 'SELECT * FROM email_cleared_data' + str_datefrom + str_dateto + str_sender + \
           str_recipients + str_cat + str_lim
    
    
    #Получаем реальные данные
    print str

    data = []
    query = (str)
    con.execute(query,req_param)
    print con.statement

    if con.fetchone():
        for real in con:
            row = dict(zip(con.column_names, real))
            row['category'] = row['category'].split(':')
            row['recipients'] = row['recipients'].split(',')
            data.append(row)
    else:
        print 'Ничего не найдено.'
    
    row_count = con.rowcount
    con.close()
    real_db.close()

    return [data,row_count]

def get_model_data(db):
    #Открываем базу с данными модели
    db = mysql.connector.connect(host="192.168.77.15",
                                      user="extractor",
                                      password="Qazcde123",
                                      database=db)
    con = db.cursor(buffered=True)

    #Формируем запрос
    query = ('SELECT code,category FROM category;')
    con.execute(query)
    
    cat = []
    for row in con:
        cat.append(row)

    con.close()
    db.close()

    return {'category':cat}
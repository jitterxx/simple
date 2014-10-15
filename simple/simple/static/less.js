



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>wishbar/less.js at master · rgmih/wishbar · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="rgmih/wishbar" name="twitter:title" /><meta content="wishbar - bar of wishes for everyone" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/70692?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/70692?v=2&amp;s=400" property="og:image" /><meta content="rgmih/wishbar" property="og:title" /><meta content="https://github.com/rgmih/wishbar" property="og:url" /><meta content="wishbar - bar of wishes for everyone" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BC5DF332:7B5D:1E05B0CF:53FDC620" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="lJaQR61hAKoFyrfUJIS62M3VW5Z1HfLAqNpBkaRdN8jx6l9BVVwhd8S9AHSZo7nmlPlIe1PjuqzJpxKQCSaQpw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-9c49d9e68129bbdfa78438fa0eca52a07a0a3a22.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-6aef7d1f7f74bbb0add318b3c89672a9e5239879.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="a6abfbea32d5a2616eb4eee75a1e6093">

      
  <meta name="description" content="wishbar - bar of wishes for everyone">
  <meta name="go-import" content="github.com/rgmih/wishbar git https://github.com/rgmih/wishbar.git">

  <meta content="70692" name="octolytics-dimension-user_id" /><meta content="rgmih" name="octolytics-dimension-user_login" /><meta content="8633307" name="octolytics-dimension-repository_id" /><meta content="rgmih/wishbar" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8633307" name="octolytics-dimension-repository_network_root_id" /><meta content="rgmih/wishbar" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/rgmih/wishbar/commits/master.atom" rel="alternate" title="Recent Commits to wishbar:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Frgmih%2Fwishbar%2Fblob%2Fmaster%2Fwishbar%2Fjs%2Fless.js">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search">
      <form accept-charset="UTF-8" action="/rgmih/wishbar/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/rgmih/wishbar/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Frgmih%2Fwishbar"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/rgmih/wishbar/stargazers">
      15
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Frgmih%2Fwishbar"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/rgmih/wishbar/network" class="social-count">
        4
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/rgmih" class="url fn" itemprop="url" rel="author"><span itemprop="title">rgmih</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/rgmih/wishbar" class="js-current-repository js-repo-home-link">wishbar</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/rgmih/wishbar/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/rgmih/wishbar" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /rgmih/wishbar">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/rgmih/wishbar/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /rgmih/wishbar/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/rgmih/wishbar/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /rgmih/wishbar/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/rgmih/wishbar/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /rgmih/wishbar/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/rgmih/wishbar/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /rgmih/wishbar/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/rgmih/wishbar.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/rgmih/wishbar.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/rgmih/wishbar" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/rgmih/wishbar" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/rgmih/wishbar/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download rgmih/wishbar as a zip file"
                   title="Download rgmih/wishbar as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/rgmih/wishbar/blob/78b656dba17f40729a1d7f6aa41bf785dbe3b68a/wishbar/js/less.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:475384afbe630e1b3ed02b66e62878ed -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rgmih/wishbar/blob/master/wishbar/js/less.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/rgmih/wishbar/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="wishbar/js/less.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rgmih/wishbar" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">wishbar</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rgmih/wishbar/tree/master/wishbar" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">wishbar</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rgmih/wishbar/tree/master/wishbar/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">less.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/rgmih/wishbar/contributors/master/wishbar/js/less.js">
    <div class="file-history-tease-header">
      Fetching contributors&hellip;
    </div>

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>9 lines (9 sloc)</span>
          <span class="meta-divider"></span>
        <span>47.054 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/rgmih/wishbar/raw/master/wishbar/js/less.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/rgmih/wishbar/blame/master/wishbar/js/less.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/rgmih/wishbar/commits/master/wishbar/js/less.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line">//</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">// LESS - Leaner CSS v1.3.0</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">// http://lesscss.org</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">// </td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">// Copyright (c) 2009-2011, Alexis Sellier</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">// Licensed under the Apache 2.0 License.</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">//</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">(function(a,b){function c(b){return a.less[b.split(&quot;/&quot;)[1]]}function l(){var a=document.getElementsByTagName(&quot;style&quot;);for(var b=0;b&lt;a.length;b++)a[b].type.match(j)&amp;&amp;(new d.Parser).parse(a[b].innerHTML||&quot;&quot;,function(c,d){var e=d.toCSS(),f=a[b];f.type=&quot;text/css&quot;,f.styleSheet?f.styleSheet.cssText=e:f.innerHTML=e})}function m(a,b){for(var c=0;c&lt;d.sheets.length;c++)n(d.sheets[c],a,b,d.sheets.length-(c+1))}function n(b,c,e,f){var h=a.location.href.replace(/[#?].*$/,&quot;&quot;),i=b.href.replace(/\?.*$/,&quot;&quot;),j=g&amp;&amp;g.getItem(i),k=g&amp;&amp;g.getItem(i+&quot;:timestamp&quot;),l={css:j,timestamp:k};/^(https?|file):/.test(i)||(i.charAt(0)==&quot;/&quot;?i=a.location.protocol+&quot;//&quot;+a.location.host+i:i=h.slice(0,h.lastIndexOf(&quot;/&quot;)+1)+i);var m=i.match(/([^\/]+)$/)[1];q(b.href,b.type,function(a,g){if(!e&amp;&amp;l&amp;&amp;g&amp;&amp;(new Date(g)).valueOf()===(new Date(l.timestamp)).valueOf())p(l.css,b),c(null,null,a,b,{local:!0,remaining:f});else try{(new d.Parser({optimization:d.optimization,paths:[i.replace(/[\w\.-]+$/,&quot;&quot;)],mime:b.type,filename:m})).parse(a,function(d,e){if(d)return u(d,i);try{c(d,e,a,b,{local:!1,lastModified:g,remaining:f}),s(document.getElementById(&quot;less-error-message:&quot;+o(i)))}catch(d){u(d,i)}})}catch(h){u(h,i)}},function(a,b){throw new Error(&quot;Couldn&#39;t load &quot;+b+&quot; (&quot;+a+&quot;)&quot;)})}function o(a){return a.replace(/^[a-z]+:\/\/?[^\/]+/,&quot;&quot;).replace(/^\//,&quot;&quot;).replace(/\?.*$/,&quot;&quot;).replace(/\.[^\.\/]+$/,&quot;&quot;).replace(/[^\.\w-]+/g,&quot;-&quot;).replace(/\./g,&quot;:&quot;)}function p(a,b,c){var d,e=b.href?b.href.replace(/\?.*$/,&quot;&quot;):&quot;&quot;,f=&quot;less:&quot;+(b.title||o(e));(d=document.getElementById(f))===null&amp;&amp;(d=document.createElement(&quot;style&quot;),d.type=&quot;text/css&quot;,d.media=b.media||&quot;screen&quot;,d.id=f,document.getElementsByTagName(&quot;head&quot;)[0].appendChild(d));if(d.styleSheet)try{d.styleSheet.cssText=a}catch(h){throw new Error(&quot;Couldn&#39;t reassign styleSheet.cssText.&quot;)}else(function(a){d.childNodes.length&gt;0?d.firstChild.nodeValue!==a.nodeValue&amp;&amp;d.replaceChild(a,d.firstChild):d.appendChild(a)})(document.createTextNode(a));c&amp;&amp;g&amp;&amp;(t(&quot;saving &quot;+e+&quot; to cache.&quot;),g.setItem(e,a),g.setItem(e+&quot;:timestamp&quot;,c))}function q(a,b,c,e){function i(b,c,d){b.status&gt;=200&amp;&amp;b.status&lt;300?c(b.responseText,b.getResponseHeader(&quot;Last-Modified&quot;)):typeof d==&quot;function&quot;&amp;&amp;d(b.status,a)}var g=r(),h=f?!1:d.async;typeof g.overrideMimeType==&quot;function&quot;&amp;&amp;g.overrideMimeType(&quot;text/css&quot;),g.open(&quot;GET&quot;,a,h),g.setRequestHeader(&quot;Accept&quot;,b||&quot;text/x-less, text/css; q=0.9, */*; q=0.5&quot;),g.send(null),f?g.status===0||g.status&gt;=200&amp;&amp;g.status&lt;300?c(g.responseText):e(g.status,a):h?g.onreadystatechange=function(){g.readyState==4&amp;&amp;i(g,c,e)}:i(g,c,e)}function r(){if(a.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject(&quot;MSXML2.XMLHTTP.3.0&quot;)}catch(b){return t(&quot;browser doesn&#39;t support AJAX.&quot;),null}}function s(a){return a&amp;&amp;a.parentNode.removeChild(a)}function t(a){d.env==&quot;development&quot;&amp;&amp;typeof console!=&quot;undefined&quot;&amp;&amp;console.log(&quot;less: &quot;+a)}function u(a,b){var c=&quot;less-error-message:&quot;+o(b),e=&#39;&lt;li&gt;&lt;label&gt;{line}&lt;/label&gt;&lt;pre class=&quot;{class}&quot;&gt;{content}&lt;/pre&gt;&lt;/li&gt;&#39;,f=document.createElement(&quot;div&quot;),g,h,i=[],j=a.filename||b;f.id=c,f.className=&quot;less-error-message&quot;,h=&quot;&lt;h3&gt;&quot;+(a.message||&quot;There is an error in your .less file&quot;)+&quot;&lt;/h3&gt;&quot;+&#39;&lt;p&gt;in &lt;a href=&quot;&#39;+j+&#39;&quot;&gt;&#39;+j+&quot;&lt;/a&gt; &quot;;var k=function(a,b,c){a.extract[b]&amp;&amp;i.push(e.replace(/\{line\}/,parseInt(a.line)+(b-1)).replace(/\{class\}/,c).replace(/\{content\}/,a.extract[b]))};a.stack?h+=&quot;&lt;br/&gt;&quot;+a.stack.split(&quot;\n&quot;).slice(1).join(&quot;&lt;br/&gt;&quot;):a.extract&amp;&amp;(k(a,0,&quot;&quot;),k(a,1,&quot;line&quot;),k(a,2,&quot;&quot;),h+=&quot;on line &quot;+a.line+&quot;, column &quot;+(a.column+1)+&quot;:&lt;/p&gt;&quot;+&quot;&lt;ul&gt;&quot;+i.join(&quot;&quot;)+&quot;&lt;/ul&gt;&quot;),f.innerHTML=h,p([&quot;.less-error-message ul, .less-error-message li {&quot;,&quot;list-style-type: none;&quot;,&quot;margin-right: 15px;&quot;,&quot;padding: 4px 0;&quot;,&quot;margin: 0;&quot;,&quot;}&quot;,&quot;.less-error-message label {&quot;,&quot;font-size: 12px;&quot;,&quot;margin-right: 15px;&quot;,&quot;padding: 4px 0;&quot;,&quot;color: #cc7777;&quot;,&quot;}&quot;,&quot;.less-error-message pre {&quot;,&quot;color: #dd6666;&quot;,&quot;padding: 4px 0;&quot;,&quot;margin: 0;&quot;,&quot;display: inline-block;&quot;,&quot;}&quot;,&quot;.less-error-message pre.line {&quot;,&quot;color: #ff0000;&quot;,&quot;}&quot;,&quot;.less-error-message h3 {&quot;,&quot;font-size: 20px;&quot;,&quot;font-weight: bold;&quot;,&quot;padding: 15px 0 5px 0;&quot;,&quot;margin: 0;&quot;,&quot;}&quot;,&quot;.less-error-message a {&quot;,&quot;color: #10a&quot;,&quot;}&quot;,&quot;.less-error-message .error {&quot;,&quot;color: red;&quot;,&quot;font-weight: bold;&quot;,&quot;padding-bottom: 2px;&quot;,&quot;border-bottom: 1px dashed red;&quot;,&quot;}&quot;].join(&quot;\n&quot;),{title:&quot;error-message&quot;}),f.style.cssText=[&quot;font-family: Arial, sans-serif&quot;,&quot;border: 1px solid #e00&quot;,&quot;background-color: #eee&quot;,&quot;border-radius: 5px&quot;,&quot;-webkit-border-radius: 5px&quot;,&quot;-moz-border-radius: 5px&quot;,&quot;color: #e00&quot;,&quot;padding: 15px&quot;,&quot;margin-bottom: 15px&quot;].join(&quot;;&quot;),d.env==&quot;development&quot;&amp;&amp;(g=setInterval(function(){document.body&amp;&amp;(document.getElementById(c)?document.body.replaceChild(f,document.getElementById(c)):document.body.insertBefore(f,document.body.firstChild),clearInterval(g))},10))}typeof define==&quot;function&quot;&amp;&amp;define.amd&amp;&amp;define(&quot;less&quot;,[],function(){return d}),Array.isArray||(Array.isArray=function(a){return Object.prototype.toString.call(a)===&quot;[object Array]&quot;||a instanceof Array}),Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c=this.length&gt;&gt;&gt;0;for(var d=0;d&lt;c;d++)d in this&amp;&amp;a.call(b,this[d],d,this)}),Array.prototype.map||(Array.prototype.map=function(a){var b=this.length&gt;&gt;&gt;0,c=new Array(b),d=arguments[1];for(var e=0;e&lt;b;e++)e in this&amp;&amp;(c[e]=a.call(d,this[e],e,this));return c}),Array.prototype.filter||(Array.prototype.filter=function(a){var b=[],c=arguments[1];for(var d=0;d&lt;this.length;d++)a.call(c,this[d])&amp;&amp;b.push(this[d]);return b}),Array.prototype.reduce||(Array.prototype.reduce=function(a){var b=this.length&gt;&gt;&gt;0,c=0;if(b===0&amp;&amp;arguments.length===1)throw new TypeError;if(arguments.length&gt;=2)var d=arguments[1];else do{if(c in this){d=this[c++];break}if(++c&gt;=b)throw new TypeError}while(!0);for(;c&lt;b;c++)c in this&amp;&amp;(d=a.call(null,d,this[c],c,this));return d}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length,c=arguments[1]||0;if(!b)return-1;if(c&gt;=b)return-1;c&lt;0&amp;&amp;(c+=b);for(;c&lt;b;c++){if(!Object.prototype.hasOwnProperty.call(this,c))continue;if(a===this[c])return c}return-1}),Object.keys||(Object.keys=function(a){var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&amp;&amp;b.push(c);return b}),String.prototype.trim||(String.prototype.trim=function(){return String(this).replace(/^\s\s*/,&quot;&quot;).replace(/\s\s*$/,&quot;&quot;)});var d,e;typeof environment==&quot;object&quot;&amp;&amp;{}.toString.call(environment)===&quot;[object Environment]&quot;?(typeof a==&quot;undefined&quot;?d={}:d=a.less={},e=d.tree={},d.mode=&quot;rhino&quot;):typeof a==&quot;undefined&quot;?(d=exports,e=c(&quot;./tree&quot;),d.mode=&quot;node&quot;):(typeof a.less==&quot;undefined&quot;&amp;&amp;(a.less={}),d=a.less,e=a.less.tree={},d.mode=&quot;browser&quot;),d.Parser=function v(a){function q(){h=k[g],i=f,l=f}function r(){k[g]=h,f=i,l=f}function s(){f&gt;l&amp;&amp;(k[g]=k[g].slice(f-l),l=f)}function t(a){var c,d,e,h,i,j,n,o;if(a instanceof Function)return a.call(m.parsers);if(typeof a==&quot;string&quot;)c=b.charAt(f)===a?a:null,e=1,s();else{s();if(c=a.exec(k[g]))e=c[0].length;else return null}if(c){o=f+=e,j=f+k[g].length-e;while(f&lt;j){h=b.charCodeAt(f);if(h!==32&amp;&amp;h!==10&amp;&amp;h!==9)break;f++}return k[g]=k[g].slice(e+(f-o)),l=f,k[g].length===0&amp;&amp;g&lt;k.length-1&amp;&amp;g++,typeof c==&quot;string&quot;?c:c.length===1?c[0]:c}}function u(a,c){var d=t(a);if(!d)v(c||(typeof a==&quot;string&quot;?&quot;expected &#39;&quot;+a+&quot;&#39; got &#39;&quot;+b.charAt(f)+&quot;&#39;&quot;:&quot;unexpected token&quot;));else return d}function v(a,b){throw{index:f,type:b||&quot;Syntax&quot;,message:a}}function w(a){return typeof a==&quot;string&quot;?b.charAt(f)===a:a.test(k[g])?!0:!1}function x(a){return d.mode===&quot;node&quot;?c(&quot;path&quot;).basename(a):a.match(/[^\/]+$/)[0]}function y(a,c){return a.filename&amp;&amp;c.filename&amp;&amp;a.filename!==c.filename?m.imports.contents[x(a.filename)]:b}function z(a,b){for(var c=a,d=-1;c&gt;=0&amp;&amp;b.charAt(c)!==&quot;\n&quot;;c--)d++;return{line:typeof a==&quot;number&quot;?(b.slice(0,a).match(/\n/g)||&quot;&quot;).length:null,column:d}}function A(a,b){var c=y(a,b),d=z(a.index,c),e=d.line,f=d.column,g=c.split(&quot;\n&quot;);this.type=a.type||&quot;Syntax&quot;,this.message=a.message,this.filename=a.filename||b.filename,this.index=a.index,this.line=typeof e==&quot;number&quot;?e+1:null,this.callLine=a.call&amp;&amp;z(a.call,c).line+1,this.callExtract=g[z(a.call,c).line],this.stack=a.stack,this.column=f,this.extract=[g[e-1],g[e],g[e+1]]}var b,f,g,h,i,j,k,l,m,n=this,o=function(){},p=this.imports={paths:a&amp;&amp;a.paths||[],queue:[],files:{},contents:{},mime:a&amp;&amp;a.mime,error:null,push:function(b,c){var e=this;this.queue.push(b),d.Parser.importer(b,this.paths,function(a,d,f){e.queue.splice(e.queue.indexOf(b),1),e.files[b]=d,e.contents[b]=f,a&amp;&amp;!e.error&amp;&amp;(e.error=a),c(a,d),e.queue.length===0&amp;&amp;o()},a)}};return this.env=a=a||{},this.optimization=&quot;optimization&quot;in this.env?this.env.optimization:1,this.env.filename=this.env.filename||null,m={imports:p,parse:function(h,i){var n,p,q,r,s,u,v=[],w,x=null;f=g=l=j=0,b=h.replace(/\r\n/g,&quot;\n&quot;),k=function(c){var d=0,e=/[^&quot;&#39;`\{\}\/\(\)\\]+/g,f=/\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g,g=/&quot;((?:[^&quot;\\\r\n]|\\.)*)&quot;|&#39;((?:[^&#39;\\\r\n]|\\.)*)&#39;|`((?:[^`\\\r\n]|\\.)*)`/g,h=0,i,j=c[0],k;for(var l=0,m,n;l&lt;b.length;l++){e.lastIndex=l,(i=e.exec(b))&amp;&amp;i.index===l&amp;&amp;(l+=i[0].length,j.push(i[0])),m=b.charAt(l),f.lastIndex=g.lastIndex=l,(i=g.exec(b))&amp;&amp;i.index===l&amp;&amp;(l+=i[0].length,j.push(i[0]),m=b.charAt(l)),!k&amp;&amp;m===&quot;/&quot;&amp;&amp;(n=b.charAt(l+1),(n===&quot;/&quot;||n===&quot;*&quot;)&amp;&amp;(i=f.exec(b))&amp;&amp;i.index===l&amp;&amp;(l+=i[0].length,j.push(i[0]),m=b.charAt(l)));switch(m){case&quot;{&quot;:if(!k){h++,j.push(m);break};case&quot;}&quot;:if(!k){h--,j.push(m),c[++d]=j=[];break};case&quot;(&quot;:if(!k){k=!0,j.push(m);break};case&quot;)&quot;:if(k){k=!1,j.push(m);break};default:j.push(m)}}return h&gt;0&amp;&amp;(x=new A({index:l,type:&quot;Parse&quot;,message:&quot;missing closing `}`&quot;,filename:a.filename},a)),c.map(function(a){return a.join(&quot;&quot;)})}([[]]);if(x)return i(x);try{n=new e.Ruleset([],t(this.parsers.primary)),n.root=!0}catch(y){return i(new A(y,a))}n.toCSS=function(b){var f,g,h;return function(f,g){var h=[],i;f=f||{},typeof g==&quot;object&quot;&amp;&amp;!Array.isArray(g)&amp;&amp;(g=Object.keys(g).map(function(a){var b=g[a];return b instanceof e.Value||(b instanceof e.Expression||(b=new e.Expression([b])),b=new e.Value([b])),new e.Rule(&quot;@&quot;+a,b,!1,0)}),h=[new e.Ruleset(null,g)]);try{var j=b.call(this,{frames:h}).toCSS([],{compress:f.compress||!1})}catch(k){throw new A(k,a)}if(i=m.imports.error)throw i instanceof A?i:new A(i,a);return f.yuicompress&amp;&amp;d.mode===&quot;node&quot;?c(&quot;./cssmin&quot;).compressor.cssmin(j):f.compress?j.replace(/(\s)+/g,&quot;$1&quot;):j}}(n.eval);if(f&lt;b.length-1){f=j,u=b.split(&quot;\n&quot;),s=(b.slice(0,f).match(/\n/g)||&quot;&quot;).length+1;for(var z=f,B=-1;z&gt;=0&amp;&amp;b.charAt(z)!==&quot;\n&quot;;z--)B++;x={type:&quot;Parse&quot;,message:&quot;Syntax Error on line &quot;+s,index:f,filename:a.filename,line:s,column:B,extract:[u[s-2],u[s-1],u[s]]}}this.imports.queue.length&gt;0?o=function(){i(x,n)}:i(x,n)},parsers:{primary:function(){var a,b=[];while((a=t(this.mixin.definition)||t(this.rule)||t(this.ruleset)||t(this.mixin.call)||t(this.comment)||t(this.directive))||t(/^[\s\n]+/))a&amp;&amp;b.push(a);return b},comment:function(){var a;if(b.charAt(f)!==&quot;/&quot;)return;if(b.charAt(f+1)===&quot;/&quot;)return new e.Comment(t(/^\/\/.*/),!0);if(a=t(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/))return new e.Comment(a)},entities:{quoted:function(){var a,c=f,d;b.charAt(c)===&quot;~&quot;&amp;&amp;(c++,d=!0);if(b.charAt(c)!==&#39;&quot;&#39;&amp;&amp;b.charAt(c)!==&quot;&#39;&quot;)return;d&amp;&amp;t(&quot;~&quot;);if(a=t(/^&quot;((?:[^&quot;\\\r\n]|\\.)*)&quot;|&#39;((?:[^&#39;\\\r\n]|\\.)*)&#39;/))return new e.Quoted(a[0],a[1]||a[2],d)},keyword:function(){var a;if(a=t(/^[_A-Za-z-][_A-Za-z0-9-]*/))return e.colors.hasOwnProperty(a)?new e.Color(e.colors[a].slice(1)):new e.Keyword(a)},call:function(){var b,c,d=f;if(!(b=/^([\w-]+|%|progid:[\w\.]+)\(/.exec(k[g])))return;b=b[1].toLowerCase();if(b===&quot;url&quot;)return null;f+=b.length;if(b===&quot;alpha&quot;)return t(this.alpha);t(&quot;(&quot;),c=t(this.entities.arguments);if(!t(&quot;)&quot;))return;if(b)return new e.Call(b,c,d,a.filename)},arguments:function(){var a=[],b;while(b=t(this.entities.assignment)||t(this.expression)){a.push(b);if(!t(&quot;,&quot;))break}return a},literal:function(){return t(this.entities.dimension)||t(this.entities.color)||t(this.entities.quoted)},assignment:function(){var a,b;if((a=t(/^\w+(?=\s?=)/i))&amp;&amp;t(&quot;=&quot;)&amp;&amp;(b=t(this.entity)))return new e.Assignment(a,b)},url:function(){var a;if(b.charAt(f)!==&quot;u&quot;||!t(/^url\(/))return;return a=t(this.entities.quoted)||t(this.entities.variable)||t(this.entities.dataURI)||t(/^[-\w%@$\/.&amp;=:;#+?~]+/)||&quot;&quot;,u(&quot;)&quot;),new e.URL(a.value||a.data||a instanceof e.Variable?a:new e.Anonymous(a),p.paths)},dataURI:function(){var a;if(t(/^data:/)){a={},a.mime=t(/^[^\/]+\/[^,;)]+/)||&quot;&quot;,a.charset=t(/^;\s*charset=[^,;)]+/)||&quot;&quot;,a.base64=t(/^;\s*base64/)||&quot;&quot;,a.data=t(/^,\s*[^)]+/);if(a.data)return a}},variable:function(){var c,d=f;if(b.charAt(f)===&quot;@&quot;&amp;&amp;(c=t(/^@@?[\w-]+/)))return new e.Variable(c,d,a.filename)},color:function(){var a;if(b.charAt(f)===&quot;#&quot;&amp;&amp;(a=t(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/)))return new e.Color(a[1])},dimension:function(){var a,c=b.charCodeAt(f);if(c&gt;57||c&lt;45||c===47)return;if(a=t(/^(-?\d*\.?\d+)(px|%|em|rem|pc|ex|in|deg|s|ms|pt|cm|mm|rad|grad|turn)?/))return new e.Dimension(a[1],a[2])},javascript:function(){var a,c=f,d;b.charAt(c)===&quot;~&quot;&amp;&amp;(c++,d=!0);if(b.charAt(c)!==&quot;`&quot;)return;d&amp;&amp;t(&quot;~&quot;);if(a=t(/^`([^`]*)`/))return new e.JavaScript(a[1],f,d)}},variable:function(){var a;if(b.charAt(f)===&quot;@&quot;&amp;&amp;(a=t(/^(@[\w-]+)\s*:/)))return a[1]},shorthand:function(){var a,b;if(!w(/^[@\w.%-]+\/[@\w.-]+/))return;if((a=t(this.entity))&amp;&amp;t(&quot;/&quot;)&amp;&amp;(b=t(this.entity)))return new e.Shorthand(a,b)},mixin:{call:function(){var c=[],d,g,h,i=f,j=b.charAt(f),k=!1;if(j!==&quot;.&quot;&amp;&amp;j!==&quot;#&quot;)return;while(d=t(/^[#.](?:[\w-]|\\(?:[a-fA-F0-9]{1,6} ?|[^a-fA-F0-9]))+/))c.push(new e.Element(g,d,f)),g=t(&quot;&gt;&quot;);t(&quot;(&quot;)&amp;&amp;(h=t(this.entities.arguments))&amp;&amp;t(&quot;)&quot;),t(this.important)&amp;&amp;(k=!0);if(c.length&gt;0&amp;&amp;(t(&quot;;&quot;)||w(&quot;}&quot;)))return new e.mixin.Call(c,h||[],i,a.filename,k)},definition:function(){var a,c=[],d,g,h,i,j,k=!1;if(b.charAt(f)!==&quot;.&quot;&amp;&amp;b.charAt(f)!==&quot;#&quot;||w(/^[^{]*(;|})/))return;q();if(d=t(/^([#.](?:[\w-]|\\(?:[a-fA-F0-9]{1,6} ?|[^a-fA-F0-9]))+)\s*\(/)){a=d[1];do{if(b.charAt(f)===&quot;.&quot;&amp;&amp;t(/^\.{3}/)){k=!0;break}if(!(h=t(this.entities.variable)||t(this.entities.literal)||t(this.entities.keyword)))break;if(h instanceof e.Variable)if(t(&quot;:&quot;))i=u(this.expression,&quot;expected expression&quot;),c.push({name:h.name,value:i});else{if(t(/^\.{3}/)){c.push({name:h.name,variadic:!0}),k=!0;break}c.push({name:h.name})}else c.push({value:h})}while(t(&quot;,&quot;));u(&quot;)&quot;),t(/^when/)&amp;&amp;(j=u(this.conditions,&quot;expected condition&quot;)),g=t(this.block);if(g)return new e.mixin.Definition(a,c,g,j,k);r()}}},entity:function(){return t(this.entities.literal)||t(this.entities.variable)||t(this.entities.url)||t(this.entities.call)||t(this.entities.keyword)||t(this.entities.javascript)||t(this.comment)},end:function(){return t(&quot;;&quot;)||w(&quot;}&quot;)},alpha:function(){var a;if(!t(/^\(opacity=/i))return;if(a=t(/^\d+/)||t(this.entities.variable))return u(&quot;)&quot;),new e.Alpha(a)},element:function(){var a,b,c,d;c=t(this.combinator),a=t(/^(?:\d+\.\d+|\d+)%/)||t(/^(?:[.#]?|:*)(?:[\w-]|\\(?:[a-fA-F0-9]{1,6} ?|[^a-fA-F0-9]))+/)||t(&quot;*&quot;)||t(this.attribute)||t(/^\([^)@]+\)/),a||t(&quot;(&quot;)&amp;&amp;(d=t(this.entities.variable))&amp;&amp;t(&quot;)&quot;)&amp;&amp;(a=new e.Paren(d));if(a)return new e.Element(c,a,f);if(c.value&amp;&amp;c.value.charAt(0)===&quot;&amp;&quot;)return new e.Element(c,null,f)},combinator:function(){var a,c=b.charAt(f);if(c===&quot;&gt;&quot;||c===&quot;+&quot;||c===&quot;~&quot;){f++;while(b.charAt(f)===&quot; &quot;)f++;return new e.Combinator(c)}if(c===&quot;&amp;&quot;){a=&quot;&amp;&quot;,f++,b.charAt(f)===&quot; &quot;&amp;&amp;(a=&quot;&amp; &quot;);while(b.charAt(f)===&quot; &quot;)f++;return new e.Combinator(a)}return b.charAt(f-1)===&quot; &quot;?new e.Combinator(&quot; &quot;):new e.Combinator(null)},selector:function(){var a,c,d=[],g,h;if(t(&quot;(&quot;))return a=t(this.entity),u(&quot;)&quot;),new e.Selector([new e.Element(&quot;&quot;,a,f)]);while(c=t(this.element)){g=b.charAt(f),d.push(c);if(g===&quot;{&quot;||g===&quot;}&quot;||g===&quot;;&quot;||g===&quot;,&quot;)break}if(d.length&gt;0)return new e.Selector(d)},tag:function(){return t(/^[a-zA-Z][a-zA-Z-]*[0-9]?/)||t(&quot;*&quot;)},attribute:function(){var a=&quot;&quot;,b,c,d;if(!t(&quot;[&quot;))return;if(b=t(/^[a-zA-Z-]+/)||t(this.entities.quoted))(d=t(/^[|~*$^]?=/))&amp;&amp;(c=t(this.entities.quoted)||t(/^[\w-]+/))?a=[b,d,c.toCSS?c.toCSS():c].join(&quot;&quot;):a=b;if(!t(&quot;]&quot;))return;if(a)return&quot;[&quot;+a+&quot;]&quot;},block:function(){var a;if(t(&quot;{&quot;)&amp;&amp;(a=t(this.primary))&amp;&amp;t(&quot;}&quot;))return a},ruleset:function(){var b=[],c,d,g;q();while(c=t(this.selector)){b.push(c),t(this.comment);if(!t(&quot;,&quot;))break;t(this.comment)}if(b.length&gt;0&amp;&amp;(d=t(this.block)))return new e.Ruleset(b,d,a.strictImports);j=f,r()},rule:function(){var a,c,d=b.charAt(f),h,l;q();if(d===&quot;.&quot;||d===&quot;#&quot;||d===&quot;&amp;&quot;)return;if(a=t(this.variable)||t(this.property)){a.charAt(0)!=&quot;@&quot;&amp;&amp;(l=/^([^@+\/&#39;&quot;*`(;{}-]*);/.exec(k[g]))?(f+=l[0].length-1,c=new e.Anonymous(l[1])):a===&quot;font&quot;?c=t(this.font):c=t(this.value),h=t(this.important);if(c&amp;&amp;t(this.end))return new e.Rule(a,c,h,i);j=f,r()}},&quot;import&quot;:function(){var a,b,c=f;if(t(/^@import\s+/)&amp;&amp;(a=t(this.entities.quoted)||t(this.entities.url))){b=t(this.mediaFeatures);if(t(&quot;;&quot;))return new e.Import(a,p,b,c)}},mediaFeature:function(){var a,b,c=[];do if(a=t(this.entities.keyword))c.push(a);else if(t(&quot;(&quot;)){b=t(this.property),a=t(this.entity);if(!t(&quot;)&quot;))return null;if(b&amp;&amp;a)c.push(new e.Paren(new e.Rule(b,a,null,f,!0)));else if(a)c.push(new e.Paren(a));else return null}while(a);if(c.length&gt;0)return new e.Expression(c)},mediaFeatures:function(){var a,b=[];do if(a=t(this.mediaFeature)){b.push(a);if(!t(&quot;,&quot;))break}else if(a=t(this.entities.variable)){b.push(a);if(!t(&quot;,&quot;))break}while(a);return b.length&gt;0?b:null},media:function(){var a,b;if(t(/^@media/)){a=t(this.mediaFeatures);if(b=t(this.block))return new e.Media(b,a)}},directive:function(){var a,c,d,g,h,i;if(b.charAt(f)!==&quot;@&quot;)return;if(c=t(this[&quot;import&quot;])||t(this.media))return c;if(a=t(/^@page|@keyframes/)||t(/^@(?:-webkit-|-moz-|-o-|-ms-)[a-z0-9-]+/)){g=(t(/^[^{]+/)||&quot;&quot;).trim();if(d=t(this.block))return new e.Directive(a+&quot; &quot;+g,d)}else if(a=t(/^@[-a-z]+/))if(a===&quot;@font-face&quot;){if(d=t(this.block))return new e.Directive(a,d)}else if((c=t(this.entity))&amp;&amp;t(&quot;;&quot;))return new e.Directive(a,c)},font:function(){var a=[],b=[],c,d,f,g;while(g=t(this.shorthand)||t(this.entity))b.push(g);a.push(new e.Expression(b));if(t(&quot;,&quot;))while(g=t(this.expression)){a.push(g);if(!t(&quot;,&quot;))break}return new e.Value(a)},value:function(){var a,b=[],c;while(a=t(this.expression)){b.push(a);if(!t(&quot;,&quot;))break}if(b.length&gt;0)return new e.Value(b)},important:function(){if(b.charAt(f)===&quot;!&quot;)return t(/^! *important/)},sub:function(){var a;if(t(&quot;(&quot;)&amp;&amp;(a=t(this.expression))&amp;&amp;t(&quot;)&quot;))return a},multiplication:function(){var a,b,c,d;if(a=t(this.operand)){while(!w(/^\/\*/)&amp;&amp;(c=t(&quot;/&quot;)||t(&quot;*&quot;))&amp;&amp;(b=t(this.operand)))d=new e.Operation(c,[d||a,b]);return d||a}},addition:function(){var a,c,d,g;if(a=t(this.multiplication)){while((d=t(/^[-+]\s+/)||b.charAt(f-1)!=&quot; &quot;&amp;&amp;(t(&quot;+&quot;)||t(&quot;-&quot;)))&amp;&amp;(c=t(this.multiplication)))g=new e.Operation(d,[g||a,c]);return g||a}},conditions:function(){var a,b,c=f,d;if(a=t(this.condition)){while(t(&quot;,&quot;)&amp;&amp;(b=t(this.condition)))d=new e.Condition(&quot;or&quot;,d||a,b,c);return d||a}},condition:function(){var a,b,c,d,g=f,h=!1;t(/^not/)&amp;&amp;(h=!0),u(&quot;(&quot;);if(a=t(this.addition)||t(this.entities.keyword)||t(this.entities.quoted))return(d=t(/^(?:&gt;=|=&lt;|[&lt;=&gt;])/))?(b=t(this.addition)||t(this.entities.keyword)||t(this.entities.quoted))?c=new e.Condition(d,a,b,g,h):v(&quot;expected expression&quot;):c=new e.Condition(&quot;=&quot;,a,new e.Keyword(&quot;true&quot;),g,h),u(&quot;)&quot;),t(/^and/)?new e.Condition(&quot;and&quot;,c,t(this.condition)):c},operand:function(){var a,c=b.charAt(f+1);b.charAt(f)===&quot;-&quot;&amp;&amp;(c===&quot;@&quot;||c===&quot;(&quot;)&amp;&amp;(a=t(&quot;-&quot;));var d=t(this.sub)||t(this.entities.dimension)||t(this.entities.color)||t(this.entities.variable)||t(this.entities.call);return a?new e.Operation(&quot;*&quot;,[new e.Dimension(-1),d]):d},expression:function(){var a,b,c=[],d;while(a=t(this.addition)||t(this.entity))c.push(a);if(c.length&gt;0)return new e.Expression(c)},property:function(){var a;if(a=t(/^(\*?-?[-a-z_0-9]+)\s*:/))return a[1]}}}};if(d.mode===&quot;browser&quot;||d.mode===&quot;rhino&quot;)d.Parser.importer=function(a,b,c,d){!/^([a-z]+:)?\//.test(a)&amp;&amp;b.length&gt;0&amp;&amp;(a=b[0]+a),n({href:a,title:a,type:d.mime},function(e){e&amp;&amp;typeof d.errback==&quot;function&quot;?d.errback.call(null,a,b,c,d):c.apply(null,arguments)},!0)};(function(a){function b(b){return a.functions.hsla(b.h,b.s,b.l,b.a)}function c(b){if(b instanceof a.Dimension)return parseFloat(b.unit==&quot;%&quot;?b.value/100:b.value);if(typeof b==&quot;number&quot;)return b;throw{error:&quot;RuntimeError&quot;,message:&quot;color functions take numbers as parameters&quot;}}function d(a){return Math.min(1,Math.max(0,a))}a.functions={rgb:function(a,b,c){return this.rgba(a,b,c,1)},rgba:function(b,d,e,f){var g=[b,d,e].map(function(a){return c(a)}),f=c(f);return new a.Color(g,f)},hsl:function(a,b,c){return this.hsla(a,b,c,1)},hsla:function(a,b,d,e){function h(a){return a=a&lt;0?a+1:a&gt;1?a-1:a,a*6&lt;1?g+(f-g)*a*6:a*2&lt;1?f:a*3&lt;2?g+(f-g)*(2/3-a)*6:g}a=c(a)%360/360,b=c(b),d=c(d),e=c(e);var f=d&lt;=.5?d*(b+1):d+b-d*b,g=d*2-f;return this.rgba(h(a+1/3)*255,h(a)*255,h(a-1/3)*255,e)},hue:function(b){return new a.Dimension(Math.round(b.toHSL().h))},saturation:function(b){return new a.Dimension(Math.round(b.toHSL().s*100),&quot;%&quot;)},lightness:function(b){return new a.Dimension(Math.round(b.toHSL().l*100),&quot;%&quot;)},alpha:function(b){return new a.Dimension(b.toHSL().a)},saturate:function(a,c){var e=a.toHSL();return e.s+=c.value/100,e.s=d(e.s),b(e)},desaturate:function(a,c){var e=a.toHSL();return e.s-=c.value/100,e.s=d(e.s),b(e)},lighten:function(a,c){var e=a.toHSL();return e.l+=c.value/100,e.l=d(e.l),b(e)},darken:function(a,c){var e=a.toHSL();return e.l-=c.value/100,e.l=d(e.l),b(e)},fadein:function(a,c){var e=a.toHSL();return e.a+=c.value/100,e.a=d(e.a),b(e)},fadeout:function(a,c){var e=a.toHSL();return e.a-=c.value/100,e.a=d(e.a),b(e)},fade:function(a,c){var e=a.toHSL();return e.a=c.value/100,e.a=d(e.a),b(e)},spin:function(a,c){var d=a.toHSL(),e=(d.h+c.value)%360;return d.h=e&lt;0?360+e:e,b(d)},mix:function(b,c,d){var e=d.value/100,f=e*2-1,g=b.toHSL().a-c.toHSL().a,h=((f*g==-1?f:(f+g)/(1+f*g))+1)/2,i=1-h,j=[b.rgb[0]*h+c.rgb[0]*i,b.rgb[1]*h+c.rgb[1]*i,b.rgb[2]*h+c.rgb[2]*i],k=b.alpha*e+c.alpha*(1-e);return new a.Color(j,k)},greyscale:function(b){return this.desaturate(b,new a.Dimension(100))},e:function(b){return new a.Anonymous(b instanceof a.JavaScript?b.evaluated:b)},escape:function(b){return new a.Anonymous(encodeURI(b.value).replace(/=/g,&quot;%3D&quot;).replace(/:/g,&quot;%3A&quot;).replace(/#/g,&quot;%23&quot;).replace(/;/g,&quot;%3B&quot;).replace(/\(/g,&quot;%28&quot;).replace(/\)/g,&quot;%29&quot;))},&quot;%&quot;:function(b){var c=Array.prototype.slice.call(arguments,1),d=b.value;for(var e=0;e&lt;c.length;e++)d=d.replace(/%[sda]/i,function(a){var b=a.match(/s/i)?c[e].value:c[e].toCSS();return a.match(/[A-Z]$/)?encodeURIComponent(b):b});return d=d.replace(/%%/g,&quot;%&quot;),new a.Quoted(&#39;&quot;&#39;+d+&#39;&quot;&#39;,d)},round:function(a){return this._math(&quot;round&quot;,a)},ceil:function(a){return this._math(&quot;ceil&quot;,a)},floor:function(a){return this._math(&quot;floor&quot;,a)},_math:function(b,d){if(d instanceof a.Dimension)return new a.Dimension(Math[b](c(d)),d.unit);if(typeof d==&quot;number&quot;)return Math[b](d);throw{type:&quot;Argument&quot;,message:&quot;argument must be a number&quot;}},argb:function(b){return new a.Anonymous(b.toARGB())},percentage:function(b){return new a.Dimension(b.value*100,&quot;%&quot;)},color:function(b){if(b instanceof a.Quoted)return new a.Color(b.value.slice(1));throw{type:&quot;Argument&quot;,message:&quot;argument must be a string&quot;}},iscolor:function(b){return this._isa(b,a.Color)},isnumber:function(b){return this._isa(b,a.Dimension)},isstring:function(b){return this._isa(b,a.Quoted)},iskeyword:function(b){return this._isa(b,a.Keyword)},isurl:function(b){return this._isa(b,a.URL)},ispixel:function(b){return b instanceof a.Dimension&amp;&amp;b.unit===&quot;px&quot;?a.True:a.False},ispercentage:function(b){return b instanceof a.Dimension&amp;&amp;b.unit===&quot;%&quot;?a.True:a.False},isem:function(b){return b instanceof a.Dimension&amp;&amp;b.unit===&quot;em&quot;?a.True:a.False},_isa:function(b,c){return b instanceof c?a.True:a.False}}})(c(&quot;./tree&quot;)),function(a){a.colors={aliceblue:&quot;#f0f8ff&quot;,antiquewhite:&quot;#faebd7&quot;,aqua:&quot;#00ffff&quot;,aquamarine:&quot;#7fffd4&quot;,azure:&quot;#f0ffff&quot;,beige:&quot;#f5f5dc&quot;,bisque:&quot;#ffe4c4&quot;,black:&quot;#000000&quot;,blanchedalmond:&quot;#ffebcd&quot;,blue:&quot;#0000ff&quot;,blueviolet:&quot;#8a2be2&quot;,brown:&quot;#a52a2a&quot;,burlywood:&quot;#deb887&quot;,cadetblue:&quot;#5f9ea0&quot;,chartreuse:&quot;#7fff00&quot;,chocolate:&quot;#d2691e&quot;,coral:&quot;#ff7f50&quot;,cornflowerblue:&quot;#6495ed&quot;,cornsilk:&quot;#fff8dc&quot;,crimson:&quot;#dc143c&quot;,cyan:&quot;#00ffff&quot;,darkblue:&quot;#00008b&quot;,darkcyan:&quot;#008b8b&quot;,darkgoldenrod:&quot;#b8860b&quot;,darkgray:&quot;#a9a9a9&quot;,darkgrey:&quot;#a9a9a9&quot;,darkgreen:&quot;#006400&quot;,darkkhaki:&quot;#bdb76b&quot;,darkmagenta:&quot;#8b008b&quot;,darkolivegreen:&quot;#556b2f&quot;,darkorange:&quot;#ff8c00&quot;,darkorchid:&quot;#9932cc&quot;,darkred:&quot;#8b0000&quot;,darksalmon:&quot;#e9967a&quot;,darkseagreen:&quot;#8fbc8f&quot;,darkslateblue:&quot;#483d8b&quot;,darkslategray:&quot;#2f4f4f&quot;,darkslategrey:&quot;#2f4f4f&quot;,darkturquoise:&quot;#00ced1&quot;,darkviolet:&quot;#9400d3&quot;,deeppink:&quot;#ff1493&quot;,deepskyblue:&quot;#00bfff&quot;,dimgray:&quot;#696969&quot;,dimgrey:&quot;#696969&quot;,dodgerblue:&quot;#1e90ff&quot;,firebrick:&quot;#b22222&quot;,floralwhite:&quot;#fffaf0&quot;,forestgreen:&quot;#228b22&quot;,fuchsia:&quot;#ff00ff&quot;,gainsboro:&quot;#dcdcdc&quot;,ghostwhite:&quot;#f8f8ff&quot;,gold:&quot;#ffd700&quot;,goldenrod:&quot;#daa520&quot;,gray:&quot;#808080&quot;,grey:&quot;#808080&quot;,green:&quot;#008000&quot;,greenyellow:&quot;#adff2f&quot;,honeydew:&quot;#f0fff0&quot;,hotpink:&quot;#ff69b4&quot;,indianred:&quot;#cd5c5c&quot;,indigo:&quot;#4b0082&quot;,ivory:&quot;#fffff0&quot;,khaki:&quot;#f0e68c&quot;,lavender:&quot;#e6e6fa&quot;,lavenderblush:&quot;#fff0f5&quot;,lawngreen:&quot;#7cfc00&quot;,lemonchiffon:&quot;#fffacd&quot;,lightblue:&quot;#add8e6&quot;,lightcoral:&quot;#f08080&quot;,lightcyan:&quot;#e0ffff&quot;,lightgoldenrodyellow:&quot;#fafad2&quot;,lightgray:&quot;#d3d3d3&quot;,lightgrey:&quot;#d3d3d3&quot;,lightgreen:&quot;#90ee90&quot;,lightpink:&quot;#ffb6c1&quot;,lightsalmon:&quot;#ffa07a&quot;,lightseagreen:&quot;#20b2aa&quot;,lightskyblue:&quot;#87cefa&quot;,lightslategray:&quot;#778899&quot;,lightslategrey:&quot;#778899&quot;,lightsteelblue:&quot;#b0c4de&quot;,lightyellow:&quot;#ffffe0&quot;,lime:&quot;#00ff00&quot;,limegreen:&quot;#32cd32&quot;,linen:&quot;#faf0e6&quot;,magenta:&quot;#ff00ff&quot;,maroon:&quot;#800000&quot;,mediumaquamarine:&quot;#66cdaa&quot;,mediumblue:&quot;#0000cd&quot;,mediumorchid:&quot;#ba55d3&quot;,mediumpurple:&quot;#9370d8&quot;,mediumseagreen:&quot;#3cb371&quot;,mediumslateblue:&quot;#7b68ee&quot;,mediumspringgreen:&quot;#00fa9a&quot;,mediumturquoise:&quot;#48d1cc&quot;,mediumvioletred:&quot;#c71585&quot;,midnightblue:&quot;#191970&quot;,mintcream:&quot;#f5fffa&quot;,mistyrose:&quot;#ffe4e1&quot;,moccasin:&quot;#ffe4b5&quot;,navajowhite:&quot;#ffdead&quot;,navy:&quot;#000080&quot;,oldlace:&quot;#fdf5e6&quot;,olive:&quot;#808000&quot;,olivedrab:&quot;#6b8e23&quot;,orange:&quot;#ffa500&quot;,orangered:&quot;#ff4500&quot;,orchid:&quot;#da70d6&quot;,palegoldenrod:&quot;#eee8aa&quot;,palegreen:&quot;#98fb98&quot;,paleturquoise:&quot;#afeeee&quot;,palevioletred:&quot;#d87093&quot;,papayawhip:&quot;#ffefd5&quot;,peachpuff:&quot;#ffdab9&quot;,peru:&quot;#cd853f&quot;,pink:&quot;#ffc0cb&quot;,plum:&quot;#dda0dd&quot;,powderblue:&quot;#b0e0e6&quot;,purple:&quot;#800080&quot;,red:&quot;#ff0000&quot;,rosybrown:&quot;#bc8f8f&quot;,royalblue:&quot;#4169e1&quot;,saddlebrown:&quot;#8b4513&quot;,salmon:&quot;#fa8072&quot;,sandybrown:&quot;#f4a460&quot;,seagreen:&quot;#2e8b57&quot;,seashell:&quot;#fff5ee&quot;,sienna:&quot;#a0522d&quot;,silver:&quot;#c0c0c0&quot;,skyblue:&quot;#87ceeb&quot;,slateblue:&quot;#6a5acd&quot;,slategray:&quot;#708090&quot;,slategrey:&quot;#708090&quot;,snow:&quot;#fffafa&quot;,springgreen:&quot;#00ff7f&quot;,steelblue:&quot;#4682b4&quot;,tan:&quot;#d2b48c&quot;,teal:&quot;#008080&quot;,thistle:&quot;#d8bfd8&quot;,tomato:&quot;#ff6347&quot;,turquoise:&quot;#40e0d0&quot;,violet:&quot;#ee82ee&quot;,wheat:&quot;#f5deb3&quot;,white:&quot;#ffffff&quot;,whitesmoke:&quot;#f5f5f5&quot;,yellow:&quot;#ffff00&quot;,yellowgreen:&quot;#9acd32&quot;}}(c(&quot;./tree&quot;)),function(a){a.Alpha=function(a){this.value=a},a.Alpha.prototype={toCSS:function(){return&quot;alpha(opacity=&quot;+(this.value.toCSS?this.value.toCSS():this.value)+&quot;)&quot;},eval:function(a){return this.value.eval&amp;&amp;(this.value=this.value.eval(a)),this}}}(c(&quot;../tree&quot;)),function(a){a.Anonymous=function(a){this.value=a.value||a},a.Anonymous.prototype={toCSS:function(){return this.value},eval:function(){return this}}}(c(&quot;../tree&quot;)),function(a){a.Assignment=function(a,b){this.key=a,this.value=b},a.Assignment.prototype={toCSS:function(){return this.key+&quot;=&quot;+(this.value.toCSS?this.value.toCSS():this.value)},eval:function(a){return this.value.eval&amp;&amp;(this.value=this.value.eval(a)),this}}}(c(&quot;../tree&quot;)),function(a){a.Call=function(a,b,c,d){this.name=a,this.args=b,this.index=c,this.filename=d},a.Call.prototype={eval:function(b){var c=this.args.map(function(a){return a.eval(b)});if(!(this.name in a.functions))return new a.Anonymous(this.name+&quot;(&quot;+c.map(function(a){return a.toCSS()}).join(&quot;, &quot;)+&quot;)&quot;);try{return a.functions[this.name].apply(a.functions,c)}catch(d){throw{type:d.type||&quot;Runtime&quot;,message:&quot;error evaluating function `&quot;+this.name+&quot;`&quot;+(d.message?&quot;: &quot;+d.message:&quot;&quot;),index:this.index,filename:this.filename}}},toCSS:function(a){return this.eval(a).toCSS()}}}(c(&quot;../tree&quot;)),function(a){a.Color=function(a,b){Array.isArray(a)?this.rgb=a:a.length==6?this.rgb=a.match(/.{2}/g).map(function(a){return parseInt(a,16)}):this.rgb=a.split(&quot;&quot;).map(function(a){return parseInt(a+a,16)}),this.alpha=typeof b==&quot;number&quot;?b:1},a.Color.prototype={eval:function(){return this},toCSS:function(){return this.alpha&lt;1?&quot;rgba(&quot;+this.rgb.map(function(a){return Math.round(a)}).concat(this.alpha).join(&quot;, &quot;)+&quot;)&quot;:&quot;#&quot;+this.rgb.map(function(a){return a=Math.round(a),a=(a&gt;255?255:a&lt;0?0:a).toString(16),a.length===1?&quot;0&quot;+a:a}).join(&quot;&quot;)},operate:function(b,c){var d=[];c instanceof a.Color||(c=c.toColor());for(var e=0;e&lt;3;e++)d[e]=a.operate(b,this.rgb[e],c.rgb[e]);return new a.Color(d,this.alpha+c.alpha)},toHSL:function(){var a=this.rgb[0]/255,b=this.rgb[1]/255,c=this.rgb[2]/255,d=this.alpha,e=Math.max(a,b,c),f=Math.min(a,b,c),g,h,i=(e+f)/2,j=e-f;if(e===f)g=h=0;else{h=i&gt;.5?j/(2-e-f):j/(e+f);switch(e){case a:g=(b-c)/j+(b&lt;c?6:0);break;case b:g=(c-a)/j+2;break;case c:g=(a-b)/j+4}g/=6}return{h:g*360,s:h,l:i,a:d}},toARGB:function(){var a=[Math.round(this.alpha*255)].concat(this.rgb);return&quot;#&quot;+a.map(function(a){return a=Math.round(a),a=(a&gt;255?255:a&lt;0?0:a).toString(16),a.length===1?&quot;0&quot;+a:a}).join(&quot;&quot;)}}}(c(&quot;../tree&quot;)),function(a){a.Comment=function(a,b){this.value=a,this.silent=!!b},a.Comment.prototype={toCSS:function(a){return a.compress?&quot;&quot;:this.value},eval:function(){return this}}}(c(&quot;../tree&quot;)),function(a){a.Condition=function(a,b,c,d,e){this.op=a.trim(),this.lvalue=b,this.rvalue=c,this.index=d,this.negate=e},a.Condition.prototype.eval=function(a){var b=this.lvalue.eval(a),c=this.rvalue.eval(a),d=this.index,e,e=function(a){switch(a){case&quot;and&quot;:return b&amp;&amp;c;case&quot;or&quot;:return b||c;default:if(b.compare)e=b.compare(c);else if(c.compare)e=c.compare(b);else throw{type:&quot;Type&quot;,message:&quot;Unable to perform comparison&quot;,index:d};switch(e){case-1:return a===&quot;&lt;&quot;||a===&quot;=&lt;&quot;;case 0:return a===&quot;=&quot;||a===&quot;&gt;=&quot;||a===&quot;=&lt;&quot;;case 1:return a===&quot;&gt;&quot;||a===&quot;&gt;=&quot;}}}(this.op);return this.negate?!e:e}}(c(&quot;../tree&quot;)),function(a){a.Dimension=function(a,b){this.value=parseFloat(a),this.unit=b||null},a.Dimension.prototype={eval:function(){return this},toColor:function(){return new a.Color([this.value,this.value,this.value])},toCSS:function(){var a=this.value+this.unit;return a},operate:function(b,c){return new a.Dimension(a.operate(b,this.value,c.value),this.unit||c.unit)},compare:function(b){return b instanceof a.Dimension?b.value&gt;this.value?-1:b.value&lt;this.value?1:0:-1}}}(c(&quot;../tree&quot;)),function(a){a.Directive=function(b,c,d){this.name=b,Array.isArray(c)?(this.ruleset=new a.Ruleset([],c),this.ruleset.allowImports=!0):this.value=c},a.Directive.prototype={toCSS:function(a,b){return this.ruleset?(this.ruleset.root=!0,this.name+(b.compress?&quot;{&quot;:&quot; {\n  &quot;)+this.ruleset.toCSS(a,b).trim().replace(/\n/g,&quot;\n  &quot;)+(b.compress?&quot;}&quot;:&quot;\n}\n&quot;)):this.name+&quot; &quot;+this.value.toCSS()+&quot;;\n&quot;},eval:function(a){return a.frames.unshift(this),this.ruleset=this.ruleset&amp;&amp;this.ruleset.eval(a),a.frames.shift(),this},variable:function(b){return a.Ruleset.prototype.variable.call(this.ruleset,b)},find:function(){return a.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.ruleset)}}}(c(&quot;../tree&quot;)),function(a){a.Element=function(b,c,d){this.combinator=b instanceof a.Combinator?b:new a.Combinator(b),typeof c==&quot;string&quot;?this.value=c.trim():c?this.value=c:this.value=&quot;&quot;,this.index=d},a.Element.prototype.eval=function(b){return new a.Element(this.combinator,this.value.eval?this.value.eval(b):this.value,this.index)},a.Element.prototype.toCSS=function(a){return this.combinator.toCSS(a||{})+(this.value.toCSS?this.value.toCSS(a):this.value)},a.Combinator=function(a){a===&quot; &quot;?this.value=&quot; &quot;:a===&quot;&amp; &quot;?this.value=&quot;&amp; &quot;:this.value=a?a.trim():&quot;&quot;},a.Combinator.prototype.toCSS=function(a){return{&quot;&quot;:&quot;&quot;,&quot; &quot;:&quot; &quot;,&quot;&amp;&quot;:&quot;&quot;,&quot;&amp; &quot;:&quot; &quot;,&quot;:&quot;:&quot; :&quot;,&quot;+&quot;:a.compress?&quot;+&quot;:&quot; + &quot;,&quot;~&quot;:a.compress?&quot;~&quot;:&quot; ~ &quot;,&quot;&gt;&quot;:a.compress?&quot;&gt;&quot;:&quot; &gt; &quot;}[this.value]}}(c(&quot;../tree&quot;)),function(a){a.Expression=function(a){this.value=a},a.Expression.prototype={eval:function(b){return this.value.length&gt;1?new a.Expression(this.value.map(function(a){return a.eval(b)})):this.value.length===1?this.value[0].eval(b):this},toCSS:function(a){return this.value.map(function(b){return b.toCSS?b.toCSS(a):&quot;&quot;}).join(&quot; &quot;)}}}(c(&quot;../tree&quot;)),function(a){a.Import=function(b,c,d,e){var f=this;this.index=e,this._path=b,this.features=d&amp;&amp;new a.Value(d),b instanceof a.Quoted?this.path=/\.(le?|c)ss(\?.*)?$/.test(b.value)?b.value:b.value+&quot;.less&quot;:this.path=b.value.value||b.value,this.css=/css(\?.*)?$/.test(this.path),this.css||c.push(this.path,function(b,c){b&amp;&amp;(b.index=e),f.root=c||new a.Ruleset([],[])})},a.Import.prototype={toCSS:function(a){var b=this.features?&quot; &quot;+this.features.toCSS(a):&quot;&quot;;return this.css?&quot;@import &quot;+this._path.toCSS()+b+&quot;;\n&quot;:&quot;&quot;},eval:function(b){var c,d=this.features&amp;&amp;this.features.eval(b);if(this.css)return this;c=new a.Ruleset([],this.root.rules.slice(0));for(var e=0;e&lt;c.rules.length;e++)c.rules[e]instanceof a.Import&amp;&amp;Array.prototype</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">.splice.apply(c.rules,[e,1].concat(c.rules[e].eval(b)));return this.features?new a.Media(c.rules,this.features.value):c.rules}}}(c(&quot;../tree&quot;)),function(a){a.JavaScript=function(a,b,c){this.escaped=c,this.expression=a,this.index=b},a.JavaScript.prototype={eval:function(b){var c,d=this,e={},f=this.expression.replace(/@\{([\w-]+)\}/g,function(c,e){return a.jsify((new a.Variable(&quot;@&quot;+e,d.index)).eval(b))});try{f=new Function(&quot;return (&quot;+f+&quot;)&quot;)}catch(g){throw{message:&quot;JavaScript evaluation error: `&quot;+f+&quot;`&quot;,index:this.index}}for(var h in b.frames[0].variables())e[h.slice(1)]={value:b.frames[0].variables()[h].value,toJS:function(){return this.value.eval(b).toCSS()}};try{c=f.call(e)}catch(g){throw{message:&quot;JavaScript evaluation error: &#39;&quot;+g.name+&quot;: &quot;+g.message+&quot;&#39;&quot;,index:this.index}}return typeof c==&quot;string&quot;?new a.Quoted(&#39;&quot;&#39;+c+&#39;&quot;&#39;,c,this.escaped,this.index):Array.isArray(c)?new a.Anonymous(c.join(&quot;, &quot;)):new a.Anonymous(c)}}}(c(&quot;../tree&quot;)),function(a){a.Keyword=function(a){this.value=a},a.Keyword.prototype={eval:function(){return this},toCSS:function(){return this.value},compare:function(b){return b instanceof a.Keyword?b.value===this.value?0:1:-1}},a.True=new a.Keyword(&quot;true&quot;),a.False=new a.Keyword(&quot;false&quot;)}(c(&quot;../tree&quot;)),function(a){a.Media=function(b,c){var d=new a.Element(&quot;&amp;&quot;,null,0),e=[new a.Selector([d])];this.features=new a.Value(c),this.ruleset=new a.Ruleset(e,b),this.ruleset.allowImports=!0},a.Media.prototype={toCSS:function(a,b){var c=this.features.toCSS(b);return this.ruleset.root=a.length===0||a[0].multiMedia,&quot;@media &quot;+c+(b.compress?&quot;{&quot;:&quot; {\n  &quot;)+this.ruleset.toCSS(a,b).trim().replace(/\n/g,&quot;\n  &quot;)+(b.compress?&quot;}&quot;:&quot;\n}\n&quot;)},eval:function(b){b.mediaBlocks||(b.mediaBlocks=[],b.mediaPath=[]);var c=b.mediaBlocks.length;b.mediaPath.push(this),b.mediaBlocks.push(this);var d=new a.Media([],[]);return d.features=this.features.eval(b),b.frames.unshift(this.ruleset),d.ruleset=this.ruleset.eval(b),b.frames.shift(),b.mediaBlocks[c]=d,b.mediaPath.pop(),b.mediaPath.length===0?d.evalTop(b):d.evalNested(b)},variable:function(b){return a.Ruleset.prototype.variable.call(this.ruleset,b)},find:function(){return a.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return a.Ruleset.prototype.rulesets.apply(this.ruleset)},evalTop:function(b){var c=this;if(b.mediaBlocks.length&gt;1){var d=new a.Element(&quot;&amp;&quot;,null,0),e=[new a.Selector([d])];c=new a.Ruleset(e,b.mediaBlocks),c.multiMedia=!0}return delete b.mediaBlocks,delete b.mediaPath,c},evalNested:function(b){var c,d,e=b.mediaPath.concat([this]);for(c=0;c&lt;e.length;c++)d=e[c].features instanceof a.Value?e[c].features.value:e[c].features,e[c]=Array.isArray(d)?d:[d];return this.features=new a.Value(this.permute(e).map(function(b){b=b.map(function(b){return b.toCSS?b:new a.Anonymous(b)});for(c=b.length-1;c&gt;0;c--)b.splice(c,0,new a.Anonymous(&quot;and&quot;));return new a.Expression(b)})),new a.Ruleset([],[])},permute:function(a){if(a.length===0)return[];if(a.length===1)return a[0];var b=[],c=this.permute(a.slice(1));for(var d=0;d&lt;c.length;d++)for(var e=0;e&lt;a[0].length;e++)b.push([a[0][e]].concat(c[d]));return b}}}(c(&quot;../tree&quot;)),function(a){a.mixin={},a.mixin.Call=function(b,c,d,e,f){this.selector=new a.Selector(b),this.arguments=c,this.index=d,this.filename=e,this.important=f},a.mixin.Call.prototype={eval:function(a){var b,c,d=[],e=!1;for(var f=0;f&lt;a.frames.length;f++)if((b=a.frames[f].find(this.selector)).length&gt;0){c=this.arguments&amp;&amp;this.arguments.map(function(b){return b.eval(a)});for(var g=0;g&lt;b.length;g++)if(b[g].match(c,a))try{Array.prototype.push.apply(d,b[g].eval(a,this.arguments,this.important).rules),e=!0}catch(h){throw{message:h.message,index:this.index,filename:this.filename,stack:h.stack}}if(e)return d;throw{type:&quot;Runtime&quot;,message:&quot;No matching definition was found for `&quot;+this.selector.toCSS().trim()+&quot;(&quot;+this.arguments.map(function(a){return a.toCSS()}).join(&quot;, &quot;)+&quot;)`&quot;,index:this.index,filename:this.filename}}throw{type:&quot;Name&quot;,message:this.selector.toCSS().trim()+&quot; is undefined&quot;,index:this.index,filename:this.filename}}},a.mixin.Definition=function(b,c,d,e,f){this.name=b,this.selectors=[new a.Selector([new a.Element(null,b)])],this.params=c,this.condition=e,this.variadic=f,this.arity=c.length,this.rules=d,this._lookups={},this.required=c.reduce(function(a,b){return!b.name||b.name&amp;&amp;!b.value?a+1:a},0),this.parent=a.Ruleset.prototype,this.frames=[]},a.mixin.Definition.prototype={toCSS:function(){return&quot;&quot;},variable:function(a){return this.parent.variable.call(this,a)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)},evalParams:function(b,c){var d=new a.Ruleset(null,[]),e;for(var f=0,g,h;f&lt;this.params.length;f++)if(h=this.params[f].name)if(this.params[f].variadic&amp;&amp;c){e=[];for(var i=f;i&lt;c.length;i++)e.push(c[i].eval(b));d.rules.unshift(new a.Rule(h,(new a.Expression(e)).eval(b)))}else if(g=c&amp;&amp;c[f]||this.params[f].value)d.rules.unshift(new a.Rule(h,g.eval(b)));else throw{type:&quot;Runtime&quot;,message:&quot;wrong number of arguments for &quot;+this.name+&quot; (&quot;+c.length+&quot; for &quot;+this.arity+&quot;)&quot;};return d},eval:function(b,c,d){var e=this.evalParams(b,c),f,g=[],h,i;for(var j=0;j&lt;Math.max(this.params.length,c&amp;&amp;c.length);j++)g.push(c[j]||this.params[j].value);return e.rules.unshift(new a.Rule(&quot;@arguments&quot;,(new a.Expression(g)).eval(b))),h=d?this.rules.map(function(b){return new a.Rule(b.name,b.value,&quot;!important&quot;,b.index)}):this.rules.slice(0),(new a.Ruleset(null,h)).eval({frames:[this,e].concat(this.frames,b.frames)})},match:function(a,b){var c=a&amp;&amp;a.length||0,d,e;if(!this.variadic){if(c&lt;this.required)return!1;if(c&gt;this.params.length)return!1;if(this.required&gt;0&amp;&amp;c&gt;this.params.length)return!1}if(this.condition&amp;&amp;!this.condition.eval({frames:[this.evalParams(b,a)].concat(b.frames)}))return!1;d=Math.min(c,this.arity);for(var f=0;f&lt;d;f++)if(!this.params[f].name&amp;&amp;a[f].eval(b).toCSS()!=this.params[f].value.eval(b).toCSS())return!1;return!0}}}(c(&quot;../tree&quot;)),function(a){a.Operation=function(a,b){this.op=a.trim(),this.operands=b},a.Operation.prototype.eval=function(b){var c=this.operands[0].eval(b),d=this.operands[1].eval(b),e;if(c instanceof a.Dimension&amp;&amp;d instanceof a.Color)if(this.op===&quot;*&quot;||this.op===&quot;+&quot;)e=d,d=c,c=e;else throw{name:&quot;OperationError&quot;,message:&quot;Can&#39;t substract or divide a color from a number&quot;};return c.operate(this.op,d)},a.operate=function(a,b,c){switch(a){case&quot;+&quot;:return b+c;case&quot;-&quot;:return b-c;case&quot;*&quot;:return b*c;case&quot;/&quot;:return b/c}}}(c(&quot;../tree&quot;)),function(a){a.Paren=function(a){this.value=a},a.Paren.prototype={toCSS:function(a){return&quot;(&quot;+this.value.toCSS(a)+&quot;)&quot;},eval:function(b){return new a.Paren(this.value.eval(b))}}}(c(&quot;../tree&quot;)),function(a){a.Quoted=function(a,b,c,d){this.escaped=c,this.value=b||&quot;&quot;,this.quote=a.charAt(0),this.index=d},a.Quoted.prototype={toCSS:function(){return this.escaped?this.value:this.quote+this.value+this.quote},eval:function(b){var c=this,d=this.value.replace(/`([^`]+)`/g,function(d,e){return(new a.JavaScript(e,c.index,!0)).eval(b).value}).replace(/@\{([\w-]+)\}/g,function(d,e){var f=(new a.Variable(&quot;@&quot;+e,c.index)).eval(b);return&quot;value&quot;in f?f.value:f.toCSS()});return new a.Quoted(this.quote+d+this.quote,d,this.escaped,this.index)}}}(c(&quot;../tree&quot;)),function(a){a.Rule=function(b,c,d,e,f){this.name=b,this.value=c instanceof a.Value?c:new a.Value([c]),this.important=d?&quot; &quot;+d.trim():&quot;&quot;,this.index=e,this.inline=f||!1,b.charAt(0)===&quot;@&quot;?this.variable=!0:this.variable=!1},a.Rule.prototype.toCSS=function(a){return this.variable?&quot;&quot;:this.name+(a.compress?&quot;:&quot;:&quot;: &quot;)+this.value.toCSS(a)+this.important+(this.inline?&quot;&quot;:&quot;;&quot;)},a.Rule.prototype.eval=function(b){return new a.Rule(this.name,this.value.eval(b),this.important,this.index,this.inline)},a.Shorthand=function(a,b){this.a=a,this.b=b},a.Shorthand.prototype={toCSS:function(a){return this.a.toCSS(a)+&quot;/&quot;+this.b.toCSS(a)},eval:function(){return this}}}(c(&quot;../tree&quot;)),function(a){a.Ruleset=function(a,b,c){this.selectors=a,this.rules=b,this._lookups={},this.strictImports=c},a.Ruleset.prototype={eval:function(b){var c=this.selectors&amp;&amp;this.selectors.map(function(a){return a.eval(b)}),d=new a.Ruleset(c,this.rules.slice(0),this.strictImports);d.root=this.root,d.allowImports=this.allowImports,b.frames.unshift(d);if(d.root||d.allowImports||!d.strictImports)for(var e=0;e&lt;d.rules.length;e++)d.rules[e]instanceof a.Import&amp;&amp;Array.prototype.splice.apply(d.rules,[e,1].concat(d.rules[e].eval(b)));for(var e=0;e&lt;d.rules.length;e++)d.rules[e]instanceof a.mixin.Definition&amp;&amp;(d.rules[e].frames=b.frames.slice(0));for(var e=0;e&lt;d.rules.length;e++)d.rules[e]instanceof a.mixin.Call&amp;&amp;Array.prototype.splice.apply(d.rules,[e,1].concat(d.rules[e].eval(b)));for(var e=0,f;e&lt;d.rules.length;e++)f=d.rules[e],f instanceof a.mixin.Definition||(d.rules[e]=f.eval?f.eval(b):f);return b.frames.shift(),d},match:function(a){return!a||a.length===0},variables:function(){return this._variables?this._variables:this._variables=this.rules.reduce(function(b,c){return c instanceof a.Rule&amp;&amp;c.variable===!0&amp;&amp;(b[c.name]=c),b},{})},variable:function(a){return this.variables()[a]},rulesets:function(){return this._rulesets?this._rulesets:this._rulesets=this.rules.filter(function(b){return b instanceof a.Ruleset||b instanceof a.mixin.Definition})},find:function(b,c){c=c||this;var d=[],e,f,g=b.toCSS();return g in this._lookups?this._lookups[g]:(this.rulesets().forEach(function(e){if(e!==c)for(var g=0;g&lt;e.selectors.length;g++)if(f=b.match(e.selectors[g])){b.elements.length&gt;e.selectors[g].elements.length?Array.prototype.push.apply(d,e.find(new a.Selector(b.elements.slice(1)),c)):d.push(e);break}}),this._lookups[g]=d)},toCSS:function(b,c){var d=[],e=[],f=[],g=[],h,i;this.root||(b.length===0?g=this.selectors.map(function(a){return[a]}):this.joinSelectors(g,b,this.selectors));for(var j=0;j&lt;this.rules.length;j++)i=this.rules[j],i.rules||i instanceof a.Directive||i instanceof a.Media?f.push(i.toCSS(g,c)):i instanceof a.Comment?i.silent||(this.root?f.push(i.toCSS(c)):e.push(i.toCSS(c))):i.toCSS&amp;&amp;!i.variable?e.push(i.toCSS(c)):i.value&amp;&amp;!i.variable&amp;&amp;e.push(i.value.toString());return f=f.join(&quot;&quot;),this.root?d.push(e.join(c.compress?&quot;&quot;:&quot;\n&quot;)):e.length&gt;0&amp;&amp;(h=g.map(function(a){return a.map(function(a){return a.toCSS(c)}).join(&quot;&quot;).trim()}).join(c.compress?&quot;,&quot;:&quot;,\n&quot;),d.push(h,(c.compress?&quot;{&quot;:&quot; {\n  &quot;)+e.join(c.compress?&quot;&quot;:&quot;\n  &quot;)+(c.compress?&quot;}&quot;:&quot;\n}\n&quot;))),d.push(f),d.join(&quot;&quot;)+(c.compress?&quot;\n&quot;:&quot;&quot;)},joinSelectors:function(a,b,c){for(var d=0;d&lt;c.length;d++)this.joinSelector(a,b,c[d])},joinSelector:function(b,c,d){var e=[],f=[],g=[],h=[],i=!1,j;for(var k=0;k&lt;d.elements.length;k++)j=d.elements[k],j.combinator.value.charAt(0)===&quot;&amp;&quot;&amp;&amp;(i=!0),i?h.push(j):g.push(j);i||(h=g,g=[]),g.length&gt;0&amp;&amp;e.push(new a.Selector(g)),h.length&gt;0&amp;&amp;f.push(new a.Selector(h));for(var l=0;l&lt;c.length;l++)b.push(e.concat(c[l]).concat(f))}}}(c(&quot;../tree&quot;)),function(a){a.Selector=function(a){this.elements=a,this.elements[0].combinator.value===&quot;&quot;&amp;&amp;(this.elements[0].combinator.value=&quot; &quot;)},a.Selector.prototype.match=function(a){var b=this.elements.length,c=a.elements.length,d=Math.min(b,c);if(b&lt;c)return!1;for(var e=0;e&lt;d;e++)if(this.elements[e].value!==a.elements[e].value)return!1;return!0},a.Selector.prototype.eval=function(b){return new a.Selector(this.elements.map(function(a){return a.eval(b)}))},a.Selector.prototype.toCSS=function(a){return this._css?this._css:this._css=this.elements.map(function(b){return typeof b==&quot;string&quot;?&quot; &quot;+b.trim():b.toCSS(a)}).join(&quot;&quot;)}}(c(&quot;../tree&quot;)),function(b){b.URL=function(b,c){b.data?this.attrs=b:(typeof a!=&quot;undefined&quot;&amp;&amp;!/^(?:https?:\/\/|file:\/\/|data:|\/)/.test(b.value)&amp;&amp;c.length&gt;0&amp;&amp;(b.value=c[0]+(b.value.charAt(0)===&quot;/&quot;?b.value.slice(1):b.value)),this.value=b,this.paths=c)},b.URL.prototype={toCSS:function(){return&quot;url(&quot;+(this.attrs?&quot;data:&quot;+this.attrs.mime+this.attrs.charset+this.attrs.base64+this.attrs.data:this.value.toCSS())+&quot;)&quot;},eval:function(a){return this.attrs?this:new b.URL(this.value.eval(a),this.paths)}}}(c(&quot;../tree&quot;)),function(a){a.Value=function(a){this.value=a,this.is=&quot;value&quot;},a.Value.prototype={eval:function(b){return this.value.length===1?this.value[0].eval(b):new a.Value(this.value.map(function(a){return a.eval(b)}))},toCSS:function(a){return this.value.map(function(b){return b.toCSS(a)}).join(a.compress?&quot;,&quot;:&quot;, &quot;)}}}(c(&quot;../tree&quot;)),function(a){a.Variable=function(a,b,c){this.name=a,this.index=b,this.file=c},a.Variable.prototype={eval:function(b){var c,d,e=this.name;e.indexOf(&quot;@@&quot;)==0&amp;&amp;(e=&quot;@&quot;+(new a.Variable(e.slice(1))).eval(b).value);if(c=a.find(b.frames,function(a){if(d=a.variable(e))return d.value.eval(b)}))return c;throw{type:&quot;Name&quot;,message:&quot;variable &quot;+e+&quot; is undefined&quot;,filename:this.file,index:this.index}}}}(c(&quot;../tree&quot;)),function(a){a.find=function(a,b){for(var c=0,d;c&lt;a.length;c++)if(d=b.call(a,a[c]))return d;return null},a.jsify=function(a){return Array.isArray(a.value)&amp;&amp;a.value.length&gt;1?&quot;[&quot;+a.value.map(function(a){return a.toCSS(!1)}).join(&quot;, &quot;)+&quot;]&quot;:a.toCSS(!1)}}(c(&quot;./tree&quot;));var f=location.protocol===&quot;file:&quot;||location.protocol===&quot;chrome:&quot;||location.protocol===&quot;chrome-extension:&quot;||location.protocol===&quot;resource:&quot;;d.env=d.env||(location.hostname==&quot;127.0.0.1&quot;||location.hostname==&quot;0.0.0.0&quot;||location.hostname==&quot;localhost&quot;||location.port.length&gt;0||f?&quot;development&quot;:&quot;production&quot;),d.async=!1,d.poll=d.poll||(f?1e3:1500),d.watch=function(){return this.watchMode=!0},d.unwatch=function(){return this.watchMode=!1},d.env===&quot;development&quot;?(d.optimization=0,/!watch/.test(location.hash)&amp;&amp;d.watch(),d.watchTimer=setInterval(function(){d.watchMode&amp;&amp;m(function(a,b,c,d,e){b&amp;&amp;p(b.toCSS(),d,e.lastModified)})},d.poll)):d.optimization=3;var g;try{g=typeof a.localStorage==&quot;undefined&quot;?null:a.localStorage}catch(h){g=null}var i=document.getElementsByTagName(&quot;link&quot;),j=/^text\/(x-)?less$/;d.sheets=[];for(var k=0;k&lt;i.length;k++)(i[k].rel===&quot;stylesheet/less&quot;||i[k].rel.match(/stylesheet/)&amp;&amp;i[k].type.match(j))&amp;&amp;d.sheets.push(i[k]);d.refresh=function(a){var b,c;b=c=new Date,m(function(a,d,e,f,g){g.local?t(&quot;loading &quot;+f.href+&quot; from cache.&quot;):(t(&quot;parsed &quot;+f.href+&quot; successfully.&quot;),p(d.toCSS(),f,g.lastModified)),t(&quot;css for &quot;+f.href+&quot; generated in &quot;+(new Date-c)+&quot;ms&quot;),g.remaining===0&amp;&amp;t(&quot;css generated in &quot;+(new Date-b)+&quot;ms&quot;),c=new Date},a),l()},d.refreshStyles=l,d.refresh(d.env===&quot;development&quot;)})(window);</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05314s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2b4202fc62ef88e1a007a9ed05df10607b189f42.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0c072eefdb055537f7cef0c747794a57a0e29641.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>


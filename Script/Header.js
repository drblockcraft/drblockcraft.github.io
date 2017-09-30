$(document).ready(function(){

$("#head").html(
  "<header class=\"container\">"                                                                     +
  "<div class=\"row\">"                                                                              +
  "<h1 class=\"col-sm-4\" title=\"Ben\'s Portfolio\">"                                               +
  "Ben\'s Portfolio"                                                                                 +
  "</h1>"                                                                                            +
  "<nav class=\"col-sm-8 text-right\">"                                                              +
  "<div class=\"dropdown\">"                                                                         +
  "<a class=\"btn btn-primary\" href=\"pages/about/about.html\" target=\"Info\" title=\"About Me\">" +
  "About Me"                                                                                         +
  "</a>"                                                                                             +
  "</div>"                                                                                           +
  "</nav>"                                                                                           +
  "</header>"















);



});


/*
$("#exact_age").html("You are<br/><span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span> old");
<header class="container">
  <div class="row">
    <h1 class="col-sm-4" title="Ben's Portfolio">Ben's Portfolio</h1>
    <nav class="col-sm-8 text-right">
<!-- add your navagation links edit # and replace existing links as desired-->
      <div class="dropdown">
        <a class="btn btn-primary" href="pages/about/about.html" target="Info" title="About Me">About Me</a>
      </div>

      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" title="Projects">Projects
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="pages/Projects/Age Calculator/AgeCalc.html" target="Info" title="Age Calculator">Age Calculator</a></li>
          <li><a href="pages/Projects/#" target="Info">Css</a></li>
          <li><a href="pages/Projects/#" target="Info">Javascript</a></li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" title="Assignments">Assignments
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="pages/Assignments/#" target="Info">Html</a></li>
          <li><a href="pages/Assignments/#" target="Info">Css</a></li>
          <li><a href="pages/Assignments/#" target="Info">Javascript</a></li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" title="Software">SOFTWARE
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="pages/Software/#" target="Info">Html</a></li>
          <li><a href="pages/Software/#" target="Info">Css</a></li>
          <li><a href="pages/Software/#" target="Info">Javascript</a></li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" title="Hardware">HARDWARE
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="pages/Hardware/#" target="Info">School Computer</a></li>
          <li><a href="pages/Hardware/#" target="Info">CSS</a></li>
          <li><a href="pages/Hardware/#" target="Info">JavaScript</a></li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" title="Background">Background
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><button class="btn" type="button" onclick="Prospit()" id="Prospit">  Prospit</button></li>
          <li><button class="btn" type="button" onclick="Derse()" id="Derse">  Derse</button></li>
        </ul>
      </div>
     </nav>
   </div>
 </header>

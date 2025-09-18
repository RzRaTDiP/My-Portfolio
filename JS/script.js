// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  document.getElementById("work-title").innerText = element.getAttribute('data-title') || element.alt || '';
  document.getElementById("work-detail").innerText = element.getAttribute('data-desc') || '';
  // แสดง tools
  const tools = (element.getAttribute('data-tools') || '').split(',');
  const toolIcons = {
    python: '<img src="Photo/python.png" alt="Python" title="Python" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    powerbi: '<img src="Photo/powerbi.png" alt="Power BI" title="Power BI" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    vscode: '<img src="Photo/vscode.png" alt="VSCode" title="VSCode" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    figma: '<img src="Photo/figma.png" alt="Figma" title="Figma" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    mysql: '<img src="Photo/mysql.png" alt="MySQL" title="MySQL" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    dart: '<img src="Photo/dart.png" alt="Dart" title="Dart" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    colab: '<img src="Photo/colab.png" alt="Colab" title="Colab" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    html: '<img src="Photo/html.png" alt="HTML" title="HTML" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    css: '<img src="Photo/css.png" alt="CSS" title="CSS" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">',
    js: '<img src="Photo/js.png" alt="JavaScript" title="JavaScript" style="width:36px; height:36px; margin:0 6px;vertical-align:middle;">'
  };
  document.getElementById("work-tools").innerHTML = tools.filter(t=>t).map(t=>toolIcons[t.trim()]||'').join('');
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

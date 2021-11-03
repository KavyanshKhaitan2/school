navbarContent = `<nav style="position: sticky; top:0; z-index:999999999;" class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="<root>">AHPS Archives</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="<root>">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<root>/5/">Class 5 Archives</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
rootURL = "/school"

body = document.getElementsByTagName('body')[0].innerHTML;
body = navbarContent + body;
body = body.split('<root>').join(rootURL)
document.getElementsByTagName('body')[0].innerHTML = body;

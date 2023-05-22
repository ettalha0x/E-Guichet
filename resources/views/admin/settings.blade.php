@extends(backpack_view('blank'))

@section('content')

<div class="jumbotron">
  <h1 class="mb-4">Paramètres</h1>
  <form method="get" action="/admin/parametre" id="settingsForm">
    @csrf
    <div class="mb-3 col-6">
      <label for="Email1" class="form-label">Email address</label>
      <input type="text" name="receiver_1" class="form-control" id="Email1" aria-describedby="emailHelp" value="{{$receiver_1}}">
      <div id="emailError1" class="text-danger"></div>
    </div>
    <div class="mb-3 col-6">
      <label for="Email2" class="form-label">Email address</label>
      <input type="text" name="receiver_2" class="form-control" id="Email2" aria-describedby="emailHelp" value="{{$receiver_2}}">
      <div id="emailError2" class="text-danger"></div>
    </div>
    <div class="mb-3 col-6">
      <label for="exampleInputPassword1" class="form-label">Nombre de mois limite pour demande de correction d note</label>
      <input type="text" name="note_c" class="form-control" id="note-c" value="{{$note_c}}">
      <div id="note-error" class="text-danger"></div>
    </div>
    
    <div class="mb-3 col-6">
      <label for="exampleInputPassword1" class="form-label">Nombre de mois limite pour demande de correction d Donnees</label>
      <input type="text" name="info_c" class="form-control" id="info-c" value="{{$info_c}}">
      <div id="info-error" class="text-danger"></div>
    </div>

    <div class="mb-3 col-6">
      <label for="exampleInputPassword1" class="form-label">Nombre de mois limite pour demande de correction d Donnees</label>
      <input type="text" name="m_add" class="form-control" id="m-add" value="{{$m_add}}">
      <div id="m_add-error" class="text-danger"></div>
    </div>

    <div class="mb-3 col-6">
      <label for="exampleInputPassword1" class="form-label">Nombre maximum de documents demandés par jour</label>
      <input type="text" name="max_doc" class="form-control" id="max-doc" value="{{$max_doc}}">
      <div id="max_doc-error" class="text-danger"></div>
    </div>

    <div class="mb-3 col-6">
      <label for="exampleInputPassword1" class="form-label">Nombre de mois limite pour demander des documents</label>
      <input type="text" name="doc_r" class="form-control" id="doc-r" value="{{$doc_r}}">
      <div id="doc_r-error" class="text-danger"></div>
    </div>
   

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

<script>
  // Function to validate the email addresses
  var successMessage = "Mis à jour avec succés";
  var errorMessage = "S'il vous plaît, entrez un nombre valide.";
  function validateEmail() {
    var emailInput1 = document.getElementById("Email1").value;
    var emailError1 = document.getElementById("emailError1");

    var emailInput2 = document.getElementById("Email2").value;
    var emailError2 = document.getElementById("emailError2");
    var emailErrorMessage = "S'il vous plaît, mettez une adresse email valide.";

    // Regular expression pattern for email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email addresses match the pattern
    if (!emailPattern.test(emailInput1)) {
      emailError1.innerHTML = emailErrorMessage;
      return false;
    } else if (!emailPattern.test(emailInput2)) {
      emailError2.innerHTML = emailErrorMessage;
      return false;
    } else {
      emailError1.className = "text-success";
      emailError2.className = "text-success";
      emailError1.innerHTML = successMessage;
      emailError2.innerHTML = successMessage;
      return true;
    }
    /////////////// END OF EMAIL VERIFICATION //////////////////
  }

  function validateint()
  {
     /////////////// INTGERS VERIFICATION //////////////////
     var noteCorrectionInput = document.getElementById("note-c").value;
    var noteCorrectionError = document.getElementById("note-error");

    var infoCorrectionInput = document.getElementById("info-c").value;
    var infoCorrectionError = document.getElementById("info-error");

    var m_add_Input = document.getElementById("m-add").value;
    var m_add_Error = document.getElementById("m_add-error");

    var maxdocInput = document.getElementById("max-doc").value;
    var maxdocError = document.getElementById("max_doc-error");

    var docInput = document.getElementById("doc-r").value;
    var docError = document.getElementById("doc_r-error");

   // Regular expression pattern for integer validation
   var intPattern = /^\d+$/;

    // Check if the input matches the integer pattern
    if (!intPattern.test(noteCorrectionInput)) {
      noteCorrectionError.innerHTML = errorMessage;
      return false;
    } 
    else if(!intPattern.test(infoCorrectionInput)) {
        infoCorrectionError.innerHTML = errorMessage;
        return false;
    }
    else if(!intPattern.test(m_add_Input)) {
        m_add_Error.innerHTML = errorMessage;
        return false;
    }
    else if(!intPattern.test(maxdocInput)) {
        maxdocError.innerHTML = errorMessage;
        return false;
    }
    else if(!intPattern.test(docInput)) {
      docError.innerHTML = errorMessage;
        return false;
    }
    else {
      noteCorrectionError.className = "text-success";
      infoCorrectionError.className = "text-success";
      m_add_Error.className = "text-success";
      maxdocError.className = "text-success";
      docError.className = "text-success";

      noteCorrectionError.innerHTML = successMessage;
      infoCorrectionError.innerHTML = successMessage;
      m_add_Error.innerHTML = successMessage;
      maxdocError.innerHTML = successMessage;
      docError.innerHTML = successMessage;
      return true;
    }
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission

    if (validateEmail() && validateint()) {
      
      document.getElementById("settingsForm").submit();
    }
  }

  // Add event listener to the form submission
  document.getElementById("settingsForm").addEventListener("submit", handleSubmit);
</script>



@endsection

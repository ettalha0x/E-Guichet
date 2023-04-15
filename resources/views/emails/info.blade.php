
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- Custom CSS -->
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #333;
      background: url('https://example.com/background-image.jpg') no-repeat center center fixed;
      background-size: cover;
    }
    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    ul {
      margin-bottom: 1rem;
      list-style: none;
      padding-left: 0;
    }
    ul li:before {
      content: "✓ ";
      color: #28a745;
      font-weight: bold;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.8);
    }
    .text-center {
      text-align: center;
    }
    .mb-4 {
      margin-bottom: 2rem;
    }
    .btn {
      display: inline-block;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: all 0.2s ease-in-out;
    }
    .btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    .btn-primary:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="text-center mb-4">
          <h1>Request for Correction</h1>
        </div>
        <p>Dear Administrator,</p>
        <p>I am writing to request to add modules sited bellow in the semester <strong>x</strong>.</p>
        <p>Here are my details:</p>
        <ul>
        <li><strong>Full Name:</strong> {{ auth()->user()->name }}</li>
        <li><strong>Semester:</strong> {{ auth()->user()->semestre }}</li>
        <li><strong>Appoge:</strong> {{ auth()->user()->email }}</li>
        <li><strong>CNI:</strong> {{ auth()->user()->cni }}</li>
        @foreach($data as $key => $value)
        @if(!empty($value))
        <p>{{ $key }}: {{ $value }}</p>
        @endif
        @endforeach
        </ul>
        <p>Thank you for your prompt attention to this matter. Please let me know if you require any further information from me.</p>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sign In</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="signin.css" rel="stylesheet">
  </head>
  <body>
    <div id="Biscuitbar"><div id="biscuittext">New Gen LMS</div></div>
    <div id="signinbox">
      <div id="signinText">Sign In</div>
      <input id="usernamebox" name="usernamebox" type="text" placeholder=" username">
      <input id="passwordbox" name="passwordbox" type="text" placeholder=" password">
      <br>
      <div id="buttondiv">
        <button type="submit" name="submit" value="insert" id="signinbutton">Sign In</button>
      </div>

      <?php
        $view = false;
        
        if(isset($_POST['submit'])) {
					
					include '../php/pwd.php';
				
					// Create new connection through mysqli using the four pieces of credentials
					$conn = new mysqli($servername, $username, $password, $db);

					// Check connection and quit if it doesn't work
					if ($conn->connect_error) {
						die("Connection failed: " . $conn->connect_error);
					}
					
					switch($_POST['submit']) {
						
						case 'insert':
							if(!empty($_POST['usernamebox']) && !empty($_POST['passwordbox'])) {
								$password = $_POST['passwordbox'];
								$username = $_POST['usernamebox'];
								
								$sql = "INSERT INTO account (pass, email) VALUES ('$password', '$username')";
								
								
								$result = $conn->query($sql);
								$sql = "SELECT * FROM account";
								$result = $conn->query($sql);
								$view = true;
								break;
							}
						}
				}

        $conn->close();
      ?>

      <br>
      <div id="prompt">
        <span id="registerprompt">Not signed up? <a href="https://google.com">Register</a></span>
      </div>
    </div>
  </body>

</html>

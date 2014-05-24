<script type="text/x-handlebars" id="login">
    <header>

    </header>

    <div class="ui two column middle aligned relaxed grid basic segment">
      <div class="column">

        <div class="ui error form segment">
         <h1>Log In</h1>

          <div class="ui error message">
            <div class="header">Login Error</div>
            <p>Could not sign in!</p>
          </div>

            <form>
              <div class="field">
                <label>Username</label>
                <div class="ui left labeled icon input">
                    <input type="text" placeholder="Email">
                  <i class="user icon"></i>
                  <div class="ui corner label">
                    <i class="asterisk icon"></i>
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Password</label>
                <div class="ui left labeled icon input">
                  <input type="password" placeholder="Password">
                  <i class="lock icon"></i>
                  <div class="ui corner label">
                    <i class="asterisk icon"></i>
                  </div>
                </div>
              </div>

                <button {{action 'login'}} class='ui blue submit button'>Login</button>
            </form>
        </div>
      </div>

      <div class="ui vertical divider">
        Or
      </div>

      <div class="center aligned column">

          {{#link-to 'register' class="huge green ui labeled icon button"}}
              <i class="signup icon"></i> Sign Up
          {{/link-to}}

      </div>
    </div>

    <footer>
        <p>Backdraft Startup App</p>
    </footer>
</script>

<script type="text/x-handlebars" id="account">
    {{#if isAuthenticated}}
        <h3>Logged In</h3>
    {{else}}
        <h3>Not Logged In</h3>
    {{/if}}
        <h1>Hello {{firstName}} {{lastName}}</h1>
        <p>There are {{itemsCount}} items in your account.</p>  
</script>
<script type="text/x-handlebars">
    <ul>
      {{#link-to 'index' tagName="li"}}Home{{/link-to}}
        {{#link-to 'register' tagName="li"}}Sign Up{{/link-to}}
        {{#link-to 'login' tagName="li"}}Log In{{/link-to}}
        {{#link-to 'items' tagName="li"}}Items{{/link-to}}
        {{#link-to 'account' tagName="li"}}Account{{/link-to}}
    </ul>

    {{outlet}}
</script>
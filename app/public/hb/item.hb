<script type="text/x-handlebars" id="items/index">
    <h1>Pick a Product</h1>
</script>     

<script type="text/x-handlebars" id="items">
    <div class='row'>
        
          <div class='col-sm-3'>
            <div class='list-group'>
              <ul>
                  {{#each}}
                      {{#if title}}
                        {{#link-to 'item' this classNames='list-group-item' tagName="li"}}{{title}}{{/link-to}}
                      {{/if}}
                  {{/each}}
              </ul>
            </div>
              
            <h3>Add Item</h3>
            {{input type="text" value=addForm.title size="50" placeholder="Enter an Item"}}
            <button {{action 'add'}} class='btn-primary'>Add</button>
              
        </div>
        <div class='col-sm-9'>
            {{outlet}}
        </div>
    </div>
</script>    

<script type="text/x-handlebars" id="item">
    <h1>{{title}}</h1>
    <p>{{description}}</p>
    
    <h2>Comments</h2>
    <ul>
        {{#each comments}}
            <li>{{content}}</li>
        {{else}}
            <li><em>No comments yet.</em></li>
        {{/each}}
    </ul>
</script>   
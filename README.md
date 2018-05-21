# Test task app
Application is based on [meteor skeleton repo](https://github.com/kjetilhau/meteor-skeleton.git).

## Usage
1. Clone it: `git clone https://github.com/Rademade/test-task-meteor.git`
2. `cd test-task-meteor`\
3. `meteor npm install --save`
4. `meteor`

## Packages used

### Atmosphere

- blaze-html-templates
- accounts-base
- #alanning:roles
- kadira:flow-router
- kadira:blaze-layout
- arillo:flow-router-helpers
- zimme:active-route
- aldeed:schema-deny
- aldeed:collection2-core
- aldeed:autoform
- fourseven:scss

### NPM

- simpl-schema
- bootstrap
- moment
- noty

The Meteor packages 'autopublish' and 'insecure' are removed by default.

## Structure

```
client
import
  api/
    documents/
      both/
        schemas/
      server/
  modules/
  startup/
    both/
    client/
      router/
    server/
  ui/
    components/
      documents/
        index/
          documents-index-item/
        new/
    helpers/
    layouts/
    pages/
    shared/
    stylesheets/
      theme/
public
  img/
  fonts/
server
```

Contact me if you've got a question:\
Skype: beast_228\
email: [mg@rademade.com](mailto:mg@rademade.com).

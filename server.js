const express=require('express');
//this is a glue layer between express and graphQL
const expressGraphQL=require('express-graphql')
const schema = require ('./schema/schema')
const app=express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql:true
}))
app.listen(4000, ()=>{
  console.log('Listening')
})
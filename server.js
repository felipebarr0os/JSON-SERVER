const  jsonServer  =  require ( 'json-server' ) ;
const  server  =  jsonServer . criar ( ) ;
 roteador  const =  jsonServer . roteador ( 'db.json' ) ;
const  middlewares  =  jsonServer . padrões

const  porta  =  processo . env . PORTO  ||  8080 ;

servidor . uso ( middlewares ) ;
servidor . usar ( roteador ) ;
servidor . escutar ( porta ,  ( )  =>  {
    //eslint-desable-next line sem console
    consola . log ( `JSON Server está funcionando na porta ${ port } ` ) ;
} ) ;
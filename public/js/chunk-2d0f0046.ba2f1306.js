(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0046"],{"9b29":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{search:e.search,headers:e.headers,items:e.anocurso,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("AÑOS EN CURSO")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-text-field",{attrs:{flat:"",color:"white","solo-inverted":"","hide-details":"","background-color":"teal accent-4","prepend-inner-icon":"mdi-magnify",label:"Busqueda"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e.$vuetify.breakpoint.mdAndUp?[a("v-spacer"),a("v-select",{attrs:{color:"white","background-color":"teal accent-4",flat:"","solo-inverted":"","hide-details":"",items:e.headers1,"prepend-inner-icon":"mdi-magnify",label:"Modo de Busqueda "},model:{value:e.sortBy1,callback:function(t){e.sortBy1=t},expression:"sortBy1"}})]:e._e(),a("v-spacer"),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{width:"1500px","max-width":"1000px"},model:{value:e.dialog1,callback:function(t){e.dialog1=t},expression:"dialog1"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v("Selecione un Estudiante?")]),a("v-spacer"),a("v-text-field",{attrs:{flat:"",color:"white","solo-inverted":"","hide-details":"","background-color":"teal accent-4","prepend-inner-icon":"mdi-magnify",label:"Busqueda"},model:{value:e.search1,callback:function(t){e.search1=t},expression:"search1"}}),e.$vuetify.breakpoint.mdAndUp?[a("v-spacer"),a("v-select",{attrs:{color:"white","background-color":"teal accent-4",flat:"","solo-inverted":"","hide-details":"",items:e.headers2,"prepend-inner-icon":"mdi-magnify",label:"Modo de Busqueda "},model:{value:e.sortBy1,callback:function(t){e.sortBy1=t},expression:"sortBy1"}})]:e._e()],2),a("v-data-table",{staticClass:"elevation-1",attrs:{search:e.search1,headers:e.headers2,items:e.estudiantes,"single-select":e.singleSelect=!0,"item-key":"_id","show-select":""},scopedSlots:e._u([{key:"top",fn:function(){},proxy:!0}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4"},on:{click:e.close1}},[e._v(" Cancelar ")]),a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4",disabled:e.dessavilitar1},on:{click:function(t){e.dialog1=!1}}},[e._v(" Guardar ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"teal accent-4",dark:""}},"v-btn",s,!1),o),[e._v(" Nevo año ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{elevation:"50"}},[a("v-card-title",[a("span",{attrs:{dark:""}},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:function(t){e.dialog1=!0}}},[e._v(" SELECIONE ESTUDIANTE ")])],1),a("v-col",{attrs:{cols:"20",sm:"6",md:"4"}},[a("v-select",{attrs:{items:e.cursos,required:"",rules:e.ubicacion1,label:"NOMBRE DE CURSO "},model:{value:e.curso,callback:function(t){e.curso=t},expression:"curso"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:e.sedes,required:"",rules:e.ubicacion1,label:"NOMBRE SEDE"},model:{value:e.sede,callback:function(t){e.sede=t},expression:"sede"}})],1),a("v-col",{attrs:{cols:"20",sm:"6",md:"4"}},[a("v-text-field",{attrs:{required:"",rules:e.nombreSede1,counter:25,label:"AÑO"},model:{value:e.ano,callback:function(t){e.ano=t},expression:"ano"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4"},on:{click:e.close}},[e._v(" Cancel ")]),[a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4",disabled:e.dessavilitar},on:{click:e.save}},[e._v(" Guardar ")])]],2)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("ESTAS SEGURO DE QUE QUIERES ELIMINAR EL REGITRO DEL AÑO CURSADO DEL ESTUDIANTE "+e._s(e.nombreEtudiante)+" "+e._s(e.apellido)+"?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",elevation:"2"},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"green",elvation:"2"},on:{click:e.deleteItemConfirm}},[e._v("Eliminar")]),a("v-spacer")],1)],1)],1)],2)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[a("v-btn",{staticClass:"mx-1",attrs:{fab:"",small:"",color:"teal accent-4"},on:{click:function(t){return e.editItem(o)}}},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-pencil")])],1),a("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"red",small:""},on:{click:function(t){return e.deleteItem(o)}}},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-delete")])],1)]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)},s=[],n=(a("d81d"),a("bc3a")),i=a.n(n),c=a("3d20"),r=a.n(c),l={data:function(){return{search:"",search1:"",sortBy:"name",sortBy1:"name",corecto:"",mensaje1:"",id:"",nombreSede:"",numeroSede:"",ubicacion:"",anocurso:[],apellido:"",sedes1:[],estudiantes:[],curso:"",cursos:[],sede:"",ano:"",nombreEtudiante:"",dialog:!1,dialog1:!1,dialogDelete:!1,sedes:[],selected:[],components:{},headers:[{text:"CURSO",align:"curso",sortable:!1,value:"curso.nombreCurso"},{text:"NOMBRE ESTUDIANTE",value:"nombreEtudiante.nombre"},{text:"APELLIDOS ESTUDIANTE",value:"nombreEtudiante.apellidos"},{text:"NUMERO DE DOCUMENTO",value:"nombreEtudiante.numeroDocuemnto"},{text:"SEDE",value:"sede.nombreSede"},{text:"AÑO",value:"ano"},{text:"FECHA",value:"createdAt"},{text:"OPCIONES",value:"actions",sortable:!1}],headers2:[{text:"NOMBRE",align:"nombre",sortable:!1,value:"nombre"},{text:"APELLIDOS",value:"apellidos"},{text:"NUMERO DE DOCUMENTO",value:"numeroDocuemnto"},{text:"TIPO DE DOCUMENTO",value:"tipoDocuemneto"}],headers1:[{text:"CURSO",align:"curso",sortable:!1,value:"curso.nombreCurso"},{text:"NOMBRE ESTUDIANTE",value:"nombreEtudiante.nombre"},{text:"APELLIDOS ESTUDIANTE",value:"nombreEtudiante.apellidos"},{text:"NUMERO DE DOCUMENTO",value:"nombreEtudiante.numeroDocuemnto"},{text:"SEDE",value:"sede.nombreSede"},{text:"AÑO",value:"ano"}],editedIndex:-1,nombreSede1:[function(e){return!!e||"EL NOMBRE DE LA SEDE ES REQUERIDO"},function(e){return e.length<=25||"EL NOMBRE DE LA SEDE DEBE TENER MENOS DE 25 CARACTERES"}],numeroSede1:[function(e){return!!e||"EL NUMERO DE LA SEDE ES REQUERIDO"},function(e){return e.length<=5||"EL NUMERO DE LA SEDE DEBE TENER MENOS DE 5 CARACTERES"}],ubicacion1:[function(e){return!!e||"LA UBICACION DE LA SEDE ES REQUERIDO"},function(e){return e.length<=50||"LA UBICACION DE LA SEDE DEBE TENER MENOS DE 50 CARACTERES"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"NUEVO GRADO PARA ESTUDIANT":"EDITAR GRADO DE ESTUDIANTE "},dessavilitar:function(){return 0===this.curso.length||0===this.ano.length||0===this.sede.length}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.listarAnocurso(),this.listarSedes(),this.listarGrados(),this.listarEstudiantes()},methods:{listarGrados:function(){var e=this,t=[],a={headers:{token:this.$store.state.token}};i.a.get("cursos",a).then((function(a){t=a.data.cursos,t.map((function(t){e.cursos.push({text:t.nombreCurso,value:t._id})}))})).catch((function(e){console.log(e.msg)}))},listarEstudiantes:function(){var e=this,t={headers:{token:this.$store.state.token}};i.a.get("estudiantes",t).then((function(t){e.estudiantes=t.data.estudiante})).catch((function(e){console.log(e)}))},listarSedes:function(){var e=this,t=this,a=[],o={headers:{token:this.$store.state.token}};i.a.get("sedes",o).then((function(o){return a=o.data.sedes,a.map((function(e){t.sedes.push({text:e.nombreSede,value:e._id})})),console.log(e.sedes)})).catch((function(e){console.log(e.msg)}))},error:function(e){r.a.fire({icon:"error",title:"NOMBRE DE SEDE",text:e})},msjAlerta:function(e){r.a.fire({position:"top",icon:"success",title:e,showConfirmButton:!1,timer:3e3})},listarAnocurso:function(){var e=this,t={headers:{token:this.$store.state.token}};i.a.get("anocurso",t).then((function(t){e.anocurso=t.data.anosNuevo})).catch((function(e){console.log(e.msg)}))},editItem:function(e){this.id=e._id,this.editedIndex=0,this.curso=e.curso._id,this.sede=e.sede._id,this.ano=e.ano,this.selected[0]=e.nombreEtudiante,this.dialog=!0},deleteItem:function(e){this.nombreEtudiante=e.nombreEtudiante.nombre,this.apellido=e.nombreEtudiante.apellidos,this.dialogDelete=!0,this.id=e._id,this.editedIndex=0},deleteItemConfirm:function(){console.log(this.id);var e=this,t={headers:{token:this.$store.state.token}};i.a.delete("anocurso/".concat(this.id),t).then((function(){e.listarAnocurso(),e.closeDelete(),e.corecto="GRADO DE ESTUDIANTE ELIMINADO CORECTAMENTE",e.msjAlerta(e.corecto)})).catch((function(e){console.log(e)}))},close:function(){this.dialog=!1,this.limpiar()},close1:function(){this.dialog1=!1,this.selected=[]},closeDelete:function(){var e=this;this.dialogDelete=!1,this.id="",this.limpiar(),this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},limpiar:function(){this.curso="",this.sede="",this.ano="",this.selected=[]},save:function(){var e=this;if(-1===this.editedIndex){var t={headers:{token:this.$store.state.token}};i.a.post("anocurso",{sede:this.sede,ano:this.ano,nombreEtudiante:this.selected[0]._id,curso:this.curso},t).then((function(){console.log("Guardadndo"),e.listarAnocurso(),e.limpiar(),e.close(),e.corecto="GRADO DE ESTUDIANTE GUARDADO CORECTAMENTE",e.msjAlerta(e.corecto)})).catch((function(e){console.log(e.msg)}))}else{var a={headers:{token:this.$store.state.token}};i.a.put("anocurso/".concat(this.id),{sede:this.sede,ano:this.ano,nombreEtudiante:this.selected[0]._id,curso:this.curso},a).then((function(){console.log("editando"),e.listarAnocurso(),e.limpiar(),e.close(),e.corecto="GRADO DE ESTUDIANTE EDITADO CORECTAMENTE",e.msjAlerta(e.corecto)})).catch((function(e){console.log(e.msg)}))}this.close()}}},d=l,u=a("2877"),E=a("6544"),h=a.n(E),v=a("8336"),m=a("b0af"),f=a("99d9"),b=a("62ad"),D=a("a523"),p=a("8fea"),g=a("169a"),A=a("ce7e"),x=a("132d"),O=a("0fd9"),S=a("b974"),C=a("2fa4"),k=a("8654"),T=a("71d9"),R=a("2a7f"),I=Object(u["a"])(d,o,s,!1,null,null,null);t["default"]=I.exports;h()(I,{VBtn:v["a"],VCard:m["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:b["a"],VContainer:D["a"],VDataTable:p["a"],VDialog:g["a"],VDivider:A["a"],VIcon:x["a"],VRow:O["a"],VSelect:S["a"],VSpacer:C["a"],VTextField:k["a"],VToolbar:T["a"],VToolbarTitle:R["a"]})}}]);
//# sourceMappingURL=chunk-2d0f0046.ba2f1306.js.map

drop table if exists agremiado;

drop table if exists capitulo;

drop table if exists certificado;

drop table if exists comprobante;

drop table if exists conceptoingreso;

drop table if exists especialidad;

drop table if exists motivoanulacion;

drop table if exists multa;

drop table if exists parametro;

drop table if exists registro;

drop table if exists transaccion;

drop table if exists transacciondetalle;

drop table if exists usuario;

/*==============================================================*/
/* Table: agremiado                                             */
/*==============================================================*/
create table agremiado
(
   id                   int not null AUTO_INCREMENT,
   codigocolegiado      decimal(10,0) default NULL,
   dni                  varchar(8) default NULL,
   nombres              varchar(200) default NULL,
   apellidopaterno      varchar(200) default NULL,
   apellidomaterno      varchar(200) default NULL,
   correo               varchar(200) default NULL,
   celular              varchar(200) default NULL,
   fechanacimiento      date default NULL,
   direccion            varchar(300) default NULL,
   clavegestion         varchar(50) default NULL,
   activo               tinyint(1) default NULL,
   capituloId           int default NULL,
   especialidadId       int default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: capitulo                                              */
/*==============================================================*/
create table capitulo
(
   id                   int not null AUTO_INCREMENT,
   demoninacion         varchar(200) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: certificado                                           */
/*==============================================================*/
create table certificado
(
   id                   int not null AUTO_INCREMENT,
   numero               varchar(200) default NULL,
   fechaemision         date default NULL,
   fecharegistro        date default NULL,
   fechaimpresion       date default NULL,
   fechainicio_vigencia date default NULL,
   fechafinvigencia     date default NULL,
   agremiadoDni         varchar(8) default NULL,
   impresion            tinyint(1) default NULL,
   transacciondetalleId int,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: comprobante                                           */
/*==============================================================*/
create table comprobante
(
   id                   int not null AUTO_INCREMENT,
   codigo               varchar(10) default NULL,
   denominacion         varchar(200) default NULL,
   abreviatura          varchar(100) default NULL,
   longitudserie        int default NULL,
   longitudnumero       int default NULL,
   item                 int default NULL,
   estado               tinyint(1) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: conceptoingreso                                       */
/*==============================================================*/
create table conceptoingreso
(
   id                   int not null AUTO_INCREMENT,
   denominacion         varchar(200) default NULL,
   monto                decimal(10,0) default NULL,
   agremiado            tinyint(1) default NULL,
   codigo               varchar(8) default NULL,
   abreviatura          varchar(10) default NULL,
   item                 int default NULL,
   unidad               varchar(200) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especialidad                                          */
/*==============================================================*/
create table especialidad
(
   id                   int not null AUTO_INCREMENT,
   denominacion         varchar(200) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: motivoanulacion                                       */
/*==============================================================*/
create table motivoanulacion
(
   id                   int not null AUTO_INCREMENT,
   demoninacion         varchar(200) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: multa                                                 */
/*==============================================================*/
create table multa
(
   id                   int not null,
   motivo_multa         varchar(500) default NULL,
   monto                decimal(10,0) default NULL,
   dniagremiado         varchar(8) default NULL,
   fecha                datetime default NULL,
   pagado               tinyint(1) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: parametro                                             */
/*==============================================================*/
create table parametro
(
   codigo               varchar(200) not null,
   denominacion         varchar(200) default NULL,
   valor                varchar(200) default NULL,
   valor2               varchar(200) default NULL,
   valor3               varchar(200) default NULL,
   primary key (codigo)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: registro                                              */
/*==============================================================*/
create table registro
(
   id                   int not null AUTO_INCREMENT,
   comprobanteId        int default NULL,
   serie                int default NULL,
   numero               int default NULL,
   inicial              varchar(10) default NULL,
   estado               tinyint(1) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: transaccion                                           */
/*==============================================================*/
create table transaccion
(
   id                   int not null AUTO_INCREMENT,
   agremiadoId          int default NULL,
   dniAgremiado         varchar(8) default NULL,
   comprobanteId        int default NULL,
   codigoComprobante    varchar(10) default NULL,
   motivoanulacionId    int default NULL,
   fechaTransaccion     datetime default NULL,
   fechaEmision         datetime default NULL,
   fechamodificacion    datetime default NULL,
   seriecomprobante     varchar(3) default NULL,
   numerocomprobante    varchar(8) default NULL,
   descuentosoles       decimal(10,0) default NULL,
   anulado              tinyint(1) default NULL,
   estadoaprobado       varchar(200) default NULL,
   fechaprobado         varchar(200) default NULL,
   ipenvio              varchar(200) default NULL,
   os                   varchar(200) default NULL,
   fotocomprobante      varchar(200) default NULL,
   usuarioId            varchar(200) default NULL,
   enviocorreo          tinyint(1) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: transacciondetalle                                    */
/*==============================================================*/
create table transacciondetalle
(
   id                   int not null AUTO_INCREMENT,
   transaccionId        int default NULL,
   conceptopingresoId   int,
   conceptoingreso_codigo varchar(8) default NULL,
   afectoagremiado      tinyint(1) default NULL,
   fecha_inicio         datetime default NULL,
   fechafin             datetime default NULL,
   conceptoingreso      varchar(200) default NULL,
   cantidad             decimal(10,0) default NULL,
   precio               decimal(10,0) default NULL,
   descuento            decimal(10,0) default NULL,
   usuarioId            int default NULL,
   unidad               varchar(200) default NULL,
   multaId              int,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: usuario                                               */
/*==============================================================*/
create table usuario
(
   id                   int not null AUTO_INCREMENT,
   usuario              varchar(200) default NULL,
   clave                varchar(200) default NULL,
   nombres              varchar(200) default NULL,
   apellidos            varchar(200) default NULL,
   telefono             varchar(200) default NULL,
   cargo                varchar(200) default NULL,
   rol                  varchar(200) default NULL,
   primary key (id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

alter table agremiado add constraint FK_REFERENCE_7 foreign key (capituloId)
      references capitulo (id);

alter table agremiado add constraint FK_REFERENCE_8 foreign key (especialidadId)
      references especialidad (id);

alter table certificado add constraint FK_REFERENCE_5 foreign key (transacciondetalleId)
      references transacciondetalle (id);

alter table transaccion add constraint FK_REFERENCE_1 foreign key (agremiadoId)
      references agremiado (id);

alter table transaccion add constraint FK_REFERENCE_3 foreign key (comprobanteId)
      references comprobante (id);

alter table transaccion add constraint FK_REFERENCE_6 foreign key (motivoanulacionId)
      references motivoanulacion (id);

alter table transacciondetalle add constraint FK_REFERENCE_2 foreign key (transaccionId)
      references transaccion (id);

alter table transacciondetalle add constraint FK_REFERENCE_4 foreign key (conceptopingresoId)
      references conceptoingreso (id);

alter table transacciondetalle add constraint FK_REFERENCE_9 foreign key (multaId)
      references multa (id);

--

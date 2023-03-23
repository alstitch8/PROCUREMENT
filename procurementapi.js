const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { V4 : uuid } = require("uuid");
const req = require("express/lib/request");
const res = require("express/lib/response");
const oracledb = require('oracledb');
const fs1 = require("fs");
const path = require("path");
const config = require('./dbconfig.js');

const app = express();
app.use(express.json());

app.get ("/outfit", (req, res) =>{
    const tops = ["Black", "White", "Orange", "Navy"];
    const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
    const shoes = ["White", "Grey", "Orange", "Navy"];

    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes),
    });
});

//API for PR STATUS
app.get ("/prstatus", async (req, res) =>{
    
    let dataSql = fs1.readFileSync("./sqlcodes/prstatus.sql").toString();
    let query =dataSql;
   
    async function datareturn(){
        const pool = await oracledb.createPool(config);
        const conn = await pool.getConnection();
        const data = await conn.execute( query ,[],{ outFormat: oracledb.OUT_FORMAT_OBJECT });
        return data.rows;
    }

    datareturn().then(dbRes =>{res.send(dbRes);
        //console.log(dbRes);
    }).catch(err=>{
        res.send(err)
    })
});

//API for PO STATUS
app.get ("/postatus", async (req, res) =>{
    
    let dataSql = fs1.readFileSync("./sqlcodes/poststus.sql").toString();
    let query =dataSql;
   
    async function datareturn(){
        const pool = await oracledb.createPool(config);
        const conn = await pool.getConnection();
        const data = await conn.execute( query ,[],{ outFormat: oracledb.OUT_FORMAT_OBJECT });
        return data.rows;
    }

    datareturn().then(dbRes =>{res.send(dbRes);
        //console.log(dbRes);
    }).catch(err=>{
        res.send(err)
    })
});

app.listen(3002, () => console.log("API Server is running ...."));
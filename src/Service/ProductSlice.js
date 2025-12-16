import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProduct =createAsyncThunk('products',async()=>
{
  const res=await fetch('https://dummyjson.com/products')
  const jsonRes=await res.json();
  return jsonRes.products
})
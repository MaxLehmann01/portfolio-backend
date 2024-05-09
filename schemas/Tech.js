/* Dependencies */
import mongoose from "mongoose";

/* Default-Export */
export default mongoose.model('Tech', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  icon: { 
    filename: {
      type: String,
      required: true
    }, 
    base64: {
      type: String,
      required: true
    }, 
    type: {
      type: String,
      required: true
    } 
  },
  url: String
}));
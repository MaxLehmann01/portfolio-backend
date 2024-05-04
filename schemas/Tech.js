/* Dependencies */
import mongoose from "mongoose";

/* Default-Export */
export default mongoose.model('Tech', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Buffer,
      required: true
    }
  },
  url: String
}));
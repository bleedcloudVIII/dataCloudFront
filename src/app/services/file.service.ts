import * as protoLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';


const PROTO_PATH = __dirname + './keeper.proto';

const PROTO_LOADER_OPTIONS: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

export class FileService {

  constructor() {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, PROTO_LOADER_OPTIONS);
    const keeperProto = grpc.loadPackageDefinition(packageDefinition).keeper;
    const client = new (keeperProto.FileService as any)('localhost:5000', grpc.credentials.createInsecure());
  }

  saveFile(){

  }

  downloadFile() {

  }
}

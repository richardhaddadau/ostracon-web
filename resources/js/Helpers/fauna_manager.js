import faunadb from "faunadb";

class FaunaManager {
  constructor(token) {
    this.headers = {
      "content-type": "application/json",
    };

    this.domain = "db.fauna.com";
    this.port = 443;
    this.scheme = "https";
    this.secret = token || import.meta.env.VITE_FAUNADB_TOKEN;

    // Client Config
    this.client = new faunadb.Client({
      headers: this.headers,
      domain: this.domain,
      port: this.port,
      scheme: this.scheme,
      secret: token || this.secret,
    });
  }
}

const faunaQueries = new FaunaManager();
export { faunaQueries, FaunaManager };

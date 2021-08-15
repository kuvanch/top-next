import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

 class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }   
    render():JSX.Element {
        return (
            <Html lang='ru'>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>  
                </body>
            </Html>
        );
    }
 }

 export default MyDocument;
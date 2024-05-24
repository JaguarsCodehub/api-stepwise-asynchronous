// An Object Oriented Way of building this

interface Step<I> {
  create: <O>(action: (prevResult: Awaited<I>) => O) => Step<O>;
}

export class Workflow {
  steps: Function[] = [];

  createWorkflow = (setupStep: (step: Step<any>) => void) => {
    const step: Step<any> = {
      // {name: string}
      create: <O>(action: <I>(prevResult: I) => O) => {
        this.steps.push(action);

        return step as Step<O>;
      },
    };

    setupStep(step);

    const POST = async (req: Request) => {
      const { pathname } = new URL(req.url);

      const { searchParams } = new URL(req.url);

      // http:localhost:3000/api/workflow?step=0
      const step = searchParams.get('step');

      const contentType = req.headers.get('content-type');

      if (contentType !== 'application/json') {
        return new Response('Missing JSON Request body.', { status: 400 });
      }

      let body: any;

      try {
        body = await req.json();
      } catch (error) {
        console.log(error);
      }
    };

    return { POST };
  };
}

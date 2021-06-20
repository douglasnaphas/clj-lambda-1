import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const runtime = lambda.Runtime.JAVA_11;
    const standAloneJarCode = lambda.Code.fromAsset(
      "../fn/target/lambda-clj-examples-0.1.0-standalone.jar"
    );
    const memorySize = 3000;
    const timeout = cdk.Duration.seconds(20);
    const helloFn = new lambda.Function(this, "HelloFn", {
      runtime,
      handler: "hello::handler",
      code: standAloneJarCode,
      memorySize,
      timeout,
    });
    const pojoFn = new lambda.Function(this, "PojoFn", {
      runtime,
      handler: "PojoHandler::handlepojo",
      code: standAloneJarCode,
      memorySize,
      timeout,
    });
    const streamHandlerFn = new lambda.Function(this, "StreamHandlerFn", {
      runtime,
      handler: "stream_handler",
      code: standAloneJarCode,
      memorySize,
      timeout,
    });
  }
}

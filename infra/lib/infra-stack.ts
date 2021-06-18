import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloFn = new lambda.Function(this, "HelloFn", {
      runtime: lambda.Runtime.JAVA_11,
      handler: "hello::handler",
      code: lambda.Code.fromAsset(
        "../fn/target/lambda-clj-examples-0.1.0-standalone.jar"
      ),
      memorySize: 3000,
      timeout: cdk.Duration.seconds(20),
    });
    const pojoFn = new lambda.Function(this, "PojoFn", {
      runtime: lambda.Runtime.JAVA_11,
      handler: "PojoHandler::handlepojo",
      code: lambda.Code.fromAsset(
        "../fn/target/lambda-clj-examples-0.1.0-standalone.jar"
      ),
      memorySize: 3000,
      timeout: cdk.Duration.seconds(20),
    });
  }
}

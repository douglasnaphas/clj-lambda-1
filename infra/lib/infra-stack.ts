import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, "Fn", {
      runtime: lambda.Runtime.JAVA_11,
      handler: "hello::handler",
      code: lambda.Code.fromAsset(
        "../fn/target/lambda-clj-examples-0.1.0-standalone.jar"
      ),
      memorySize: 3000,
    });
  }
}

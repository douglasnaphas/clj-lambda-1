#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { InfraStack } from "../lib/infra-stack";
const stackname = require("@cdk-turnkey/stackname");
// This is the array I'll eventually use to elegan

(async () => {
  const app = new cdk.App();
  new InfraStack(app, stackname("fn"));
})();

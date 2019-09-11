#!/usr/bin/env sh

ruby -r rubygems -e 'require "jekyll-import";
  JekyllImport::Importers::Drupal6.run({
    "dbname"  => "bcorma_drupal6",
    "user"    => "bcorma_drupal",
    "password"  => "2StrokesRock",
    "host"  =>  "localhost",
    "prefix"  => "",
    "types"  => ["blog", "story", "article"]
  })'

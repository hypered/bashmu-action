let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs { };
in
  pkgs.runCommand "dummy" {
    buildInputs = [
      pkgs.nodejs_20
    ];
  } ""

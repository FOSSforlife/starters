defmodule PhoenixExample.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      PhoenixExampleWeb.Telemetry,
      PhoenixExample.Repo,
      {DNSCluster, query: Application.get_env(:phoenix_example, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: PhoenixExample.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: PhoenixExample.Finch},
      # Start a worker by calling: PhoenixExample.Worker.start_link(arg)
      # {PhoenixExample.Worker, arg},
      # Start to serve requests, typically the last entry
      PhoenixExampleWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: PhoenixExample.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    PhoenixExampleWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end

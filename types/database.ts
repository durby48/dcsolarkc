/**
 * Database types for DC Solar KC.
 * Mirrors the `quote_requests` table defined in the README SQL.
 */

export type QuoteStatus = "new" | "contacted" | "quoted" | "won" | "archived";

export type ServiceType =
  | "Residential Solar Installation"
  | "Commercial Solar Installation"
  | "Solar Removal & Reinstall (Roofing)"
  | "Insurance Claim Restoration"
  | "Repair / Maintenance"
  | "Other";

export type PropertyType = "Residential" | "Commercial" | "Other";

export type QuoteRequest = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  service_type: string | null;
  property_type: string | null;
  is_insurance_claim: boolean;
  message: string | null;
  status: QuoteStatus;
};

/** Shape submitted by the public quote form (no server-managed fields). */
export type QuoteRequestInput = {
  name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  service_type?: string | null;
  property_type?: string | null;
  is_insurance_claim?: boolean;
  message?: string | null;
};

/** What an authenticated employee may do once their scope is honored (mirrors
 *  @durbin/contracts OperatorRole). Owner → token scope "all"; others → company. */
export type OperatorRole = "owner" | "operator" | "viewer";

/** A person allowed into the remote-operations console. Keyed by login email;
 *  `company` is the home tenant ("mobile-mulligans" | "dc-solar"). RLS: a user
 *  may read only their own row; the /api/ops-token route reads it via service role. */
export type Employee = {
  id: string;
  created_at: string;
  email: string;
  company: string;
  role: OperatorRole;
  display_name: string | null;
};

export type Database = {
  public: {
    Tables: {
      quote_requests: {
        Row: QuoteRequest;
        Insert: QuoteRequestInput & {
          id?: string;
          created_at?: string;
          status?: QuoteStatus;
          is_insurance_claim?: boolean;
        };
        Update: Partial<QuoteRequest>;
        Relationships: [];
      };
      employees: {
        Row: Employee;
        Insert: Omit<Employee, "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Employee>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

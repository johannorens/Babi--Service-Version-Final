<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Prestataire\StorePrestataireRequest;
use App\Http\Requests\Prestataire\UpdatePrestataireRequest;
use App\Http\Requests\Prestataire\CandidaturePrestataireRequest;
use App\Http\Resources\PrestataireResource;
use App\Models\Prestataire;

class PrestataireController extends Controller
{
    public function index()
    {
        $prestataires = Prestataire::with(['categorie', 'services'])->get();
        return PrestataireResource::collection($prestataires);
    }
    
    // gitddd

    public function store(StorePrestataireRequest $request)
    {
        $prestataire = Prestataire::create([
            ...$request->validated(),
            'statut' => 'valide',
        ]);
        return new PrestataireResource($prestataire->load(['categorie', 'services']));
    }

    public function candidater(CandidaturePrestataireRequest $request)
    {
        $prestataire = Prestataire::create([
            ...$request->validated(),
            'statut' => 'en_attente',
        ]);
        return new PrestataireResource($prestataire);
    }

    public function show(Prestataire $prestataire)
    {
        return new PrestataireResource($prestataire->load(['categorie', 'services']));
    }

    public function update(UpdatePrestataireRequest $request, Prestataire $prestataire)
    {
        $prestataire->update($request->validated());
        return new PrestataireResource($prestataire->load(['categorie', 'services']));
    }

    public function destroy(Prestataire $prestataire)
    {
        $prestataire->delete();
        return response()->json(['message' => 'Prestataire supprimé avec succès']);
    }
}
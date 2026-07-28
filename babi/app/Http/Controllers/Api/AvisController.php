<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Avis\StoreAvisRequest;
use App\Http\Requests\Avis\UpdateAvisRequest;
use App\Http\Resources\AvisResource;
use App\Models\Avis;
use Illuminate\Http\Request;

class AvisController extends Controller
{
    
    // git
    public function index(Request $request)
    {
        $avis = Avis::with(['utilisateur', 'reservation.service'])
            ->where('id_utilisateur', $request->user()->id_utilisateur)
            ->get();

        return AvisResource::collection($avis);
    }

    public function store(StoreAvisRequest $request)
    {
        $avis = Avis::create($request->validated() + [
            'id_utilisateur' => $request->user()->id_utilisateur,
        ]);

        return new AvisResource($avis->load(['utilisateur', 'reservation.service']));
    }

    public function show(Request $request, Avis $avis)
    {
        abort_if($avis->id_utilisateur !== $request->user()->id_utilisateur, 403);

        return new AvisResource($avis->load(['utilisateur', 'reservation.service']));
    }

    public function update(UpdateAvisRequest $request, Avis $avis)
    {
        abort_if($avis->id_utilisateur !== $request->user()->id_utilisateur, 403);

        $avis->update($request->validated());
        return new AvisResource($avis->load(['utilisateur', 'reservation.service']));
    }

    public function destroy(Request $request, Avis $avis)
    {
        abort_if($avis->id_utilisateur !== $request->user()->id_utilisateur, 403);

        $avis->delete();
        return response()->json(['message' => 'Avis supprimé avec succès']);
    }

    public function signaler(Request $request, Avis $avis)
    {
        abort_if($avis->id_utilisateur === $request->user()->id_utilisateur, 422, "Vous ne pouvez pas signaler votre propre avis.");

        $request->validate([
            'motif' => 'required|string|max:255',
        ]);

        $avis->update([
            'signale' => true,
            'motif_signalement' => $request->input('motif'),
            'signale_par' => $request->user()->id_utilisateur,
        ]);

        return new AvisResource($avis->load(['utilisateur', 'reservation.service']));
    }

    public function parService($idService)
    {
        $avis = Avis::with(['utilisateur', 'reservation.service'])
            ->whereHas('reservation', fn ($q) => $q->where('id_service', $idService))
            ->where('signale', false)
            ->get();

        return AvisResource::collection($avis);
    }
}
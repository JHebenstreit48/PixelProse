import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ChaosAndRagdolls = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Physics/ChaosAndRagdolls';

  return (
    <>
      <PageLayout>
        <PageTitle title="Chaos & Ragdolls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChaosAndRagdolls;

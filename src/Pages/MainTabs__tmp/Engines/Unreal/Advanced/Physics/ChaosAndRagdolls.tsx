import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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

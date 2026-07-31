import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

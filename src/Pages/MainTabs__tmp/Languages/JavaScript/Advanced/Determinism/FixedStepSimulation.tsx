import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FixedStepSimulation = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Determinism/FixedStepSimulation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fixed-Step Simulation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FixedStepSimulation;

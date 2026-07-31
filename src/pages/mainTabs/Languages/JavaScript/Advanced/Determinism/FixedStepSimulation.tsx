import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

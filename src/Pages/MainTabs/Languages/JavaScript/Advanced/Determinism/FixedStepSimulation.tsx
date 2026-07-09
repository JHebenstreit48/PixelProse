import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

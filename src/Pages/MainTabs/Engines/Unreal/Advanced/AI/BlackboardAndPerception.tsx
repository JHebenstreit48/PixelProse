import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BlackboardAndPerception = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/AI/BlackboardAndPerception';

  return (
    <>
      <PageLayout>
        <PageTitle title="Blackboard & Perception" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BlackboardAndPerception;

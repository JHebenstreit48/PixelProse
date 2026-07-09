import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BehaviorsAndInstanceVars = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/ObjectsAndBehaviors/BehaviorsAndInstanceVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Behaviors & Instance Vars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BehaviorsAndInstanceVars;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConditionsAndActions = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/EventSystem/ConditionsAndActions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Conditions & Actions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConditionsAndActions;

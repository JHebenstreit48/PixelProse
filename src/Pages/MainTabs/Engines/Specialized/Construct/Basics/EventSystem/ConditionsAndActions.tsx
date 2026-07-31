import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

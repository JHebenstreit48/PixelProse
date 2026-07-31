import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VariablesAndConstants = () => {
  const markdownFilePath = 'Languages/CFamily/C/Basics/DataHandling/VariablesAndConstants';

  return (
    <>
      <PageLayout>
        <PageTitle title="Variables & Constants" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndConstants;

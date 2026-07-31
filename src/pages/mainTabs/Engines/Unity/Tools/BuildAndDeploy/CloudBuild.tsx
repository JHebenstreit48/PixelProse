import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CloudBuild = () => {
  const markdownFilePath = 'Engines/Unity/Tools/BuildAndDeploy/CloudBuild';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud Build" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CloudBuild;

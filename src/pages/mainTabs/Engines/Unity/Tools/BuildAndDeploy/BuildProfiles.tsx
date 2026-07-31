import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildProfiles = () => {
  const markdownFilePath = 'Engines/Unity/Tools/BuildAndDeploy/BuildProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildProfiles;

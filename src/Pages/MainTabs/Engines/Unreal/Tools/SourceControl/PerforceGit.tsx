import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const PerforceGit = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/SourceControl/PerforceGit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Perforce/Git" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerforceGit;

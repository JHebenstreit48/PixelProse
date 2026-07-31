import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PerforceGit = () => {
  const markdownFilePath = 'Engines/Cry/Tools/SourceControl/PerforceGit';

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

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KMPBasics = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Multiplatform/KMPBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="KMP Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KMPBasics;

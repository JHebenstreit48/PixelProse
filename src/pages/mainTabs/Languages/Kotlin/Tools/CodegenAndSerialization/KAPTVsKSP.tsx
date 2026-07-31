import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KAPTVsKSP = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/CodegenAndSerialization/KAPTVsKSP';

  return (
    <>
      <PageLayout>
        <PageTitle title="KAPT vs KSP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KAPTVsKSP;
